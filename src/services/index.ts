import mc from 'merge-change';
import allServices from './imports';
import {
  TServiceName,
  TServicesImports,
  TServicesConstructors,
  TServices,
  TServicesConfigPatches
} from './types';

export const services: TServicesImports = allServices;

class Services {
  private list: TServices;
  private configs: TServicesConfigPatches;
  private classes: TServicesConstructors;
  private proxy: TServices;
  private initialState: Map<TServiceName, unknown>;

  constructor() {
    this.configs = {} as TServicesConfigPatches;
    this.list = {} as TServices;
    this.classes = {} as TServicesConstructors;
    this.initialState = new Map();
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    this.proxy = new Proxy(this.list, {
      get: <T extends keyof (TServices)>(target: TServices, key: T) => {
        if (this.classes[key]) { // проверяем на классах, так list может быть пуст
          return self.get(key);
        } else {
          return target[key]; // Для доступа к служебным полям объекта
        }
      }
    });
  }

  /**
   * Инициализация менеджера, погрузка асинхронных сервисов
   * @todo Асинхронный импорт правильней бы сделать при доступе к сервису, но тогда обращение к сервису нужно выполнять с await
   * @param configs Общая конфигурация на все сервисы
   * @returns Возвращается прокси на доступ к сервисам по их названию
   */
  async init() {
    // Асинхронная загрузка классов сервисов
    const promises = [];
    const names = Object.keys(services) as TServiceName[];
    const setClass = <Name extends TServiceName>(name: Name, constructor: TServicesConstructors[Name]) => {
      this.classes[name] = constructor;
    };
    for (const name of names) {
      promises.push(
        services[name]().then((module) => {
          setClass(name, module.default);
        }),
      );
    }
    await Promise.all(promises);
    return this.proxy;
  }

  /**
   * Подключение конфигураций
   * Объект конфигурации содержит ключи - названия сервисов, значение ключа - объект с опциями для соотв. сервиса
   * @param configs Массив с объектами опций.
   */
  configure(configs: TServicesConfigPatches | TServicesConfigPatches[]) {
    if (!Array.isArray(configs)) configs = [configs];
    for (let i = 0; i < configs.length; i++) {
      this.configs = mc.merge(this.configs, configs[i]);
    }
    return this;
  }

  /**
   * Доступ к сервису по названию
   * Сервис создаётся в единственном экземпляре и при первом обращении инициализируется
   */
  get<T extends keyof TServices>(name: T): TServices[T] {
    if (!this.list[name]) {
      if (!this.classes[name]) {
        throw new Error(`Unknown service name "${name}"`);
      }
      const Constructor = this.classes[name];
      const config = this.configs[name];
      this.list[name] = new Constructor(config as any, this.proxy) as TServices[T];
      const dump = this.initialState.get(name);
      this.list[name].init(dump);
    }
    return this.list[name];
  }
}

export default Services;

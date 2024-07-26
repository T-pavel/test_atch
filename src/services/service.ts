import mc from 'merge-change';
import { TServices } from "@src/services/types";

/**
 * Базовый класс модуля хранилища
 */
abstract class Service<Config = object, Dump = undefined> {
  readonly services: TServices;
  readonly config: Config;

  /**
   * @param config Конфиг модуля
   * @param services Менеджер сервисов
   */
  constructor(config: Patch<Config>, services: TServices) {
    this.services = services;
    this.config = mc.patch(this.defaultConfig(), config) as Config;
  }

  /**
   * Инициализация после создания экземпляра.
   * Вызывается автоматически.
   * Используется, чтобы не переопределять конструктор
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init(dump?: unknown) {
  }

  /**
   * Конфигурация по умолчанию
   */
  defaultConfig(): Config {
    return {} as Config;
  }

  /**
   * Дамп состояния сервиса, чтобы применить дамп при инициализации.
   * Вызывается после рендера на сервере у каждого сервисов
   */
  dump() {
    return undefined as Dump;
  };
}

export default Service;

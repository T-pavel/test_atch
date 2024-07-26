import { useSyncExternalStore } from 'react';

// Интерфейс для функции подписки
type Subscriber = () => void;

class State<T> {
    private state: T;
    private subscribers: Set<Subscriber> = new Set();

    constructor(initialState: T) {
        this.state = initialState;
    }

    // Метод для получения текущего состояния
    getState(): T {
        return this.state;
    }

    // Метод для обновления состояния
    setState(newState: T) {
        if (this.state !== newState) {
            this.state = newState;
            this.notifySubscribers();
        }
    }

    // Метод для подписки на изменения состояния
    subscribe(subscriber: Subscriber): () => void {
        this.subscribers.add(subscriber);
        return () => this.subscribers.delete(subscriber);
    }

    // Уведомление всех подписчиков об изменении состояния
    private notifySubscribers() {
        this.subscribers.forEach(subscriber => subscriber());
    }
}

// Хук для использования состояния
const useStateSync = <T>(stateInstance: State<T>): T => {
    return useSyncExternalStore(
        (callback) => stateInstance.subscribe(callback),
        () => stateInstance.getState()
    );
};

export { State, useStateSync };
import { NotificationStrategy } from './strategies/notification-strategy.interface';

export class NotificationContext {
    private strategy!: NotificationStrategy;

    setStrategy(strategy: NotificationStrategy) {
        this.strategy = strategy;
    }

    executeStrategy(message: string) {
        if (!this.strategy) {
            throw new Error('Estrategia no definida');
        }
        this.strategy.send(message);
    }
}



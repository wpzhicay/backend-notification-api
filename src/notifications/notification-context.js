"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationContext = void 0;
class NotificationContext {
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    executeStrategy(message) {
        if (!this.strategy) {
            throw new Error('Estrategia no definida');
        }
        this.strategy.send(message);
    }
}
exports.NotificationContext = NotificationContext;

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';
import { NotificationContext } from './notification-context';
import { EmailNotification } from './strategies/email-notification.strategy';
import { SMSNotification } from './strategies/sms-notification.strategy';
import { PushNotification } from './strategies/push-notification.strategy';

@Injectable()
export class NotificationService {
constructor(
 @InjectRepository(Notification)
 private notificationRepository: Repository<Notification>,
) {}

 async sendNotification(message: string, type: string) {
 const context = new NotificationContext();


 switch (type) {
 case 'email':
context.setStrategy(new EmailNotification());
 break;
case 'sms':
 context.setStrategy(new SMSNotification());
 break;
 case 'push':
context.setStrategy(new PushNotification());
 break;
 default:
throw new Error('Tipo de notificación no válido');
 }


context.setStrategy(new EmailNotification());
context.executeStrategy(message);


 const notification = this.notificationRepository.create({ message, type });
return this.notificationRepository.save(notification);
 }


 async findAll() {
 return this.notificationRepository.find();
 }
}

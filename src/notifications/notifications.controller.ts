import { Controller, Post, Body, Get } from '@nestjs/common';
import { NotificationService } from './notifications.service';

@Controller('notifications') 
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async createNotification(@Body() data: { message: string; type: string }) {
    return this.notificationService.sendNotification(data.message, data.type);
  }

  @Get()
  async findAll() {
    return this.notificationService.findAll();
  }
}

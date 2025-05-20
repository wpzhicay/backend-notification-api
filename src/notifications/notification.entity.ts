import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number=0;

  @Column()
  type: string='';

  @Column()
message: string='';
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';

@Entity('status')
export default class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  name: string;

  @OneToMany(() => User, (user) => user.status)
  users: User[];

}

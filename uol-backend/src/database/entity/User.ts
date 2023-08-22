import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Status from './Status';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', unique: true })
  cpf: string;

  @Column({ type: 'text' })
  phone: string;

  @Column({ type: 'number' })
  status_id: number;

  @ManyToOne(() => Status, (status) => status.users)
  @JoinColumn({ name: 'status_id' })
  status: Status;
}

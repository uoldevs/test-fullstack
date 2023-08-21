import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id?: number;

  @Column({
    length: 63,
  })
  name: string;

  @Column({
    length: 63,
  })
  email: string;

  @Column({
    length: 11,
    unique: true,
  })
  cpf: string;

  @Column({
    name: 'phone_number',
    length: 10,
  })
  phoneNumber: string;

  @Column({
    length: 63,
  })
  status: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updtedAt?: string;
}

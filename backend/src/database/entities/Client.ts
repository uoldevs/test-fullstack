import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Client {
	@PrimaryGeneratedColumn()
		id: number;

	@Column()
		nome: string;

	@Column()
		cpf: string;

	@Column()
		telefone: string;
}


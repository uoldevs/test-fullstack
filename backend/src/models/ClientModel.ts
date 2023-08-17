import { Database } from 'sqlite3';
import db from './database/config';
import IClient from '../interfaces/IClient';

export default class ClientModel {
	constructor(private dbInstance: Database = db) {}

	async getAll(): Promise<IClient[]> {
		const sql = 'SELECT * FROM client';

		return await new Promise<IClient[]>((resolve, reject) => {
			this.dbInstance.all(sql, [], (err: Error | null, rows: IClient[]) => {
				if (err) {
					return reject(err.message);
				}
				return resolve(rows);
			});
		});
	}

	async create(client: IClient): Promise<void> {
		const sql = 'INSERT INTO client (name, email, cpf, cell, status) VALUES (?, ?, ?, ?, ?)';
		const values = [client.name, client.email, client.cpf, client.cell, client.status];
	
		return await new Promise<void>((resolve, reject) => {
			this.dbInstance.run(sql, values, (err: Error | null) => {
				if (err) {
					return reject(err.message);
				}
				return resolve();
			});
		});
	}
	
}


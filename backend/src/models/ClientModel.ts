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
		const sql = 'INSERT INTO client (name, email, cpf, phone, status) VALUES (?, ?, ?, ?, ?)';
		const values = [client.name, client.email, client.cpf, client.phone, client.status];

		return await new Promise<void>((resolve, reject) => {
			this.dbInstance.run(sql, values, (err: Error | null) => {
				if (err) {
					return reject(err.message);
				}
				return resolve();
			});
		});
	}

	async update(client: IClient, id: number): Promise<IClient | null> {
		const sql = 'UPDATE client SET name = ?, email = ?, cpf = ?, phone = ?, status = ? WHERE id = ?';
		const values = [client.name, client.email, client.cpf, client.phone, client.status, id];
	
		return await new Promise<IClient | null>((resolve, reject) => {
			this.dbInstance.run(sql, values, function(err: Error | null) {
				if (err) {
					return reject(err.message);
				}
	
				if (this.changes > 0) {
					return resolve(client);
				} else {
					return resolve(null);
				}
			});
		});
	}
	
	
}


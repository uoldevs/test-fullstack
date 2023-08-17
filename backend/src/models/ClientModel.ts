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
}


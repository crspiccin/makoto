import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export default class UserRepository {
	private db: any;
	constructor() {
		(async () => {
			// open the database
			this.db = await open({
				filename: path.join(__dirname, "..", "..", "..", "makoto.db"),
				driver: sqlite3.Database,
			});
		})();
	}

	public async findAll(): Promise<any> {
		return this.db.all("SELECT * from USER");
	}
}

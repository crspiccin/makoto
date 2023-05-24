import { Entry } from "../entity/entities";
import { SQLLiteRepository } from "./SQLiteRepository";

export default class EntryRepository extends SQLLiteRepository {
	public async findAll(): Promise<any> {
		return super.all("SELECT * from ENTRY");
	}

	public async create(entry: Entry): Promise<string> {
		const sql = "INSERT INTO ENTRY ( iduser, description, type, amount, created_at) VALUES (?, ?,?,?,?)";
		const id = await super.insert(sql, [entry.user.id, entry.description, entry.type, entry.amount, Math.floor(Date.now() / 1000)]);
		return id;
	}
}

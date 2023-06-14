import { start } from "repl";
import { Entry } from "../entity/entities";
import { SQLLiteRepository } from "./SQLiteRepository";

export default class EntryRepository extends SQLLiteRepository {
	public async findAll(): Promise<any> {
		return super.all("SELECT * from ENTRY");
	}

	public async create(entry: Entry): Promise<string> {
		const sql = "INSERT INTO ENTRY ( iduser, description, type, amount, created_at) VALUES (?, ?,?,?,?)";
		const id = await super.insert(sql, [entry.user.id, entry.description, entry.type, entry.amount, entry.created_at]);
		return id;
	}

	public async findEntriesByWindow(startDate: number, endDate: number): Promise<Entry[]> {
		console.log(startDate);
		console.log(endDate);
		const sql = "SELECT * FROM ENTRY WHERE created_at BETWEEN ? AND ?";
		const entries: Entry[] = await super.query(sql, [startDate, endDate]);
		return entries;
	}
}

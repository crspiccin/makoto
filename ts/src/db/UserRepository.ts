import { User } from "../entity/entities";
import { SQLLiteRepository } from "./SQLiteRepository";

export default class UserRepository extends SQLLiteRepository {
	public async findAll(): Promise<any> {
		return super.all("SELECT * from USER");
	}

	public async create(user: User): Promise<string> {
		const sql = "INSERT INTO USER ( id, loginid, provider, name, email, created_at) VALUES (?,?,?,?,?,?)";
		const id = await super.insert(sql, [user.id, user.loginId, user.provider, user.name, user.email, Math.floor(Date.now() / 1000)]);
		return id;
	}
}

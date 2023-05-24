import { SQLLiteRepository } from "./SQLiteRepository";

export default class UserRepository extends SQLLiteRepository {
	public async findAll(): Promise<any> {
		return super.all("SELECT * from USER");
	}
}

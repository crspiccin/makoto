export type Entry = {
	id: string;
	user: User;
	description: string;
	type: string;
	amount: number;
	created_at: number;
	updated_at?: number;
};

export type User = {
	id: string;
	name: string;
	loginId: string;
	provider: string;
	email: string;
	password: string;
	created_at: number;
	updated_at?: number;
};

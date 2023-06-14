import { Router } from "express";
import UserRepository from "../db/UserRepository";
import { User } from "../entity/entities";

const router = Router();
const userRepository = new UserRepository();

router.get("/", async (req, res) => {
	const result = await userRepository.findAll();
	return res.json(result);
});

router.post("/", async (req, res) => {
	const user: User = { ...req.body };
	const id = await userRepository.create(user);
	return res.json({
		id,
	});
});

export default router;

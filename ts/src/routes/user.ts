import { Router } from "express";
import UserRepository from "../db/UserRepository";

const router = Router();
const userRepository = new UserRepository();

router.get("/", async (req, res) => {
	const result = await userRepository.findAll();
	return res.json(result);
});

export default router;

import { Router } from "express";
import EntryRepository from "../db/EntryRepository";
import { Entry } from "../entity/entities";

const router = Router();
const entryRepository = new EntryRepository();

router.get("/", async (req, res) => {
	const entries = await entryRepository.findAll();
	res.json({
		entries,
	});
});

router.post("/", async (req, res) => {
	const entry: Entry = { ...req.body };
	const id = await entryRepository.create(entry);
	return res.json({
		id,
	});
});
export default router;

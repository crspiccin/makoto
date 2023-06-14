import { Router } from "express";
import EntryRepository from "../db/EntryRepository";
import { Entry } from "../entity/entities";

const router = Router();
const entryRepository = new EntryRepository();

router.get("/", async (req, res) => {
	if (!req.query) {
		const entries = await entryRepository.findAll();
		res.json({
			entries,
		});
	}
	if (req.query.month && req.query.year) {
		// needs validation
		const year = parseInt(req.query.year.toString());
		const month = parseInt(req.query.month.toString());
		const startDate = new Date(year, month - 1, 1);
		const endDate = new Date(year, month, 0);
		console.log(startDate);
		console.log(endDate);
		const entries = await entryRepository.findEntriesByWindow(startDate.getTime(), endDate.getTime());
		res.json({
			entries,
		});
	} else {
		res.json({
			message: "invalid query",
		});
	}
});

router.post("/", async (req, res) => {
	const entry: Entry = { ...req.body };
	entry.created_at = new Date().getTime();
	const id = await entryRepository.create(entry);
	return res.json({
		id,
	});
});
export default router;

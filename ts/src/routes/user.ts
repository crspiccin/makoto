import { Router } from "express";
import { Database } from "sqlite3";

const router = Router();

router.get("/", async (req, res) => {
	res.json({
		user: "blabla",
	});
});

export default router;

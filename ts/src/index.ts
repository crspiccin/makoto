import "dotenv/config";
import express from "express";
import userRouter from "./routes/user";
import entryRouter from "./routes/entry";

const app = express();
const port = 3010;

app.use(express.json());
app.use("/users", userRouter);
app.use("/entries", entryRouter);

const server = app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

process.on("SIGTERM", () => {
	console.info("SIGTERM signal received.");
	console.log("Closing http server.");
	server.close(() => {
		console.log("Http server closed.");
	});
});

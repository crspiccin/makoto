import express from "express";
import userRouter from "./routes/user";
import entryRouter from "./routes/entry";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", userRouter);
app.use("/entries", entryRouter);

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

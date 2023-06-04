import "dotenv/config";
import { auth } from "express-openid-connect";
import { requiresAuth } from "express-openid-connect";
import express from "express";
import userRouter from "./routes/user";
import entryRouter from "./routes/entry";

const config = {
	authRequired: process.env.AUTH_REQUIRED === "true",
	auth0Logout: process.env.AUTH0_LOGOUT === "true",
	secret: process.env.SECRET,
	baseURL: process.env.BASE_URL,
	clientID: process.env.CLIENT_ID,
	issuerBaseURL: process.env.ISSUER_BASE_URL,
};

const app = express();
const port = 3010;

app.use(express.json());
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
app.use("/users", userRouter);
app.use("/entries", entryRouter);
// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
	res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
	res.send(JSON.stringify(req.oidc.user));
});

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

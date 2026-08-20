import "dotenv/config";
import cookieParser from "cookie-parser";

import express from "express";
import authRouter from "./routes/auth.routes.ts";
import noteRouter from "./routes/note.routes.ts";

const app = express();

const PORT = process.env.PORT || 3005;
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/notes", noteRouter);
app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from Express" });
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});

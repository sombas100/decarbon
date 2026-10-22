
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";

export const app = express();

app.disable("x-powered-by");

app.use(helmet());

app.use(
  cors({
    origin: env.CLIENT_URL,
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "decarbon-api",
    timestamp: new Date().toISOString(),
  });
});

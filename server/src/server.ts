import { app } from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.PORT, () => {
  console.log(
    `Decarbon API running on: http://localhost:${env.PORT}`
  );
});

function shutdown() {
  console.log("Shutting down Decarbon1 API...");

  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

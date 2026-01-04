import "dotenv/config";
import { fetchChangelogs } from "../src/index.js";

async function run() {
  const logs = await fetchChangelogs();
  console.log("Fetched changelogs:", logs);
}

run().catch((err) => {
  console.error("Test failed:", err);
});

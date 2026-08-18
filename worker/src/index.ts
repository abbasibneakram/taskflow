console.log("Worker starting...");

let tick = 0;

setInterval(() => {
  tick++;
  console.log(`[worker] heartbeat #${tick} - checking for jobs...`);
}, 5000);

process.on("SIGTERM", () => {
  console.log("Worker received SIGTERM, shutting down gracefully...");
  process.exit(0);
});

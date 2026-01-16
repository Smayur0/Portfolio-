import { createClient } from "redis";

const redis = createClient({
  url: process.env.REDIS_URL,
});

redis.on("error", (err) => {
  console.error("Redis error:", err);
});

// Prevent multiple connections in dev / serverless
if (!redis.isOpen) {
  await redis.connect();
}

export default redis;

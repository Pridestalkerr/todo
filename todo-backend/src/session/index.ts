import Redis from "ioredis";
import connectRedis, { Client } from "connect-redis";
import session from "express-session";
import {
  REDIS_PORT,
  REDIS_HOST,
  REDIS_USER,
  REDIS_PASSWORD,
  REDIS_DB,
  SESSION_SECRET,
  SAME_SITE,
  SECURE_FLAG,
} from "secrets";

const RedisStore = connectRedis(session);

let redisClient = new Redis({
  port: REDIS_PORT,
  host: REDIS_HOST,
  username: REDIS_USER,
  password: REDIS_PASSWORD,
  db: REDIS_DB,
});

redisClient.on("connect", () => {
  console.log("Redis connected");
});

redisClient.on("error", (err) => {
  console.log("Redis error: ", err);
});

const SessionManager = session({
  store: new RedisStore({ client: redisClient }),
  name: "sessionId",
  secret: SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    sameSite: SAME_SITE, // strict please
    secure: SECURE_FLAG,
    httpOnly: true,
  },
});

export { RedisStore, redisClient, SessionManager };

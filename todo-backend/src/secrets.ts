export const BACKEND_PORT: string | undefined = process.env.BACKEND_PORT;

export const DB_URI: string | undefined = process.env.DB_URI;
export const DB_HOST: string | undefined = process.env.DB_HOST;
export const DB_NAME: string | undefined = process.env.DB_NAME;
export const DB_USER: string | undefined = process.env.DB_USER;
export const DB_PASS: string | undefined = process.env.DB_PASS;

export const FRONTEND_URL: string | undefined = process.env.FRONTEND_URL;

// export const OKTA_ORG_URL: string | undefined = process.env.OKTA_ORG_URL;
// export const OKTA_CLIENT_ID: string | undefined = process.env.OKTA_CLIENT_ID;
// export const OKTA_CLIENT_SECRET: string | undefined =
//   process.env.OKTA_CLIENT_SECRET;
// export const OKTA_TOKEN: string | undefined = process.env.OKTA_TOKEN;

export const SLACK_TOKEN: string | undefined = process.env.SLACK_TOKEN;
// export const // "xoxb-3489381336180-3484233018965-OurszVudQq29CNMtCTQV9fLP";
export const SLACK_CHANNEL: string | undefined = process.env.SLACK_CHANNEL;

export const REDIS_PORT: number | undefined = Number(process.env.REDIS_PORT);
export const REDIS_HOST: string | undefined = process.env.REDIS_HOST;
export const REDIS_USER: string | undefined = process.env.REDIS_USER;
export const REDIS_PASSWORD: string | undefined = process.env.REDIS_PASSWORD;
export const REDIS_DB: number | undefined = Number(process.env.REDIS_DB);

export const SESSION_SECRET: string | undefined = process.env.SESSION_SECRET;

export const SECURE_FLAG: boolean | "auto" | undefined = Boolean(
  process.env.SECURE_FLAG
);
export const SAME_SITE: boolean | "lax" | "strict" | "none" | undefined = ((
  val: string | undefined
) => {
  if (val === "lax" || val === "strict" || val === "none") {
    return val;
  } else if (val === "true") {
    return true;
  } else if (val === "false") {
    return false;
  } else {
    return undefined;
  }
})(process.env.SAME_SITE);

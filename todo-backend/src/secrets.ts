const Secrets = {
  PORT: process.env.DB_URI || 9000,
  DB_URI:
    process.env.DB_URI ||
    "postgresql://todo:2d8i37hriewugrtyfgqfyuiwe@localhost:5432/mydb?schema=public",
  DB_HOST: process.env.DB_HOST || "localhost:27017",
  DB_NAME: process.env.DB_NAME || "todo",
  DB_USER: process.env.DB_USER || "root",
  DB_PASS: process.env.DB_PASS || "password",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  JWT_SECRET_ACCESS:
    process.env.JWT_SECRET_ACCESS ||
    "3987h4fhu9g3f4qwi7es6hd23rygwgyh8iw8itwyhecr8iwhety",
  JWT_SECRET_REFRESH:
    process.env.JWT_SECRET_REFRESH ||
    "23o4r89ty24rf897th23dr97823drt867g24rd7968t2d4r6789tg2fr3d4",
  OKTA_ORG_URL: process.env.OKTA_ORG_URL,
  OKTA_CLIENT_ID: process.env.OKTA_CLIENT_ID,
  OKTA_CLIENT_SECRET: process.env.OKTA_CLIENT_SECRET,
  OKTA_TOKEN: process.env.OKTA_TOKEN,
};

export default Secrets;

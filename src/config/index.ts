import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  databaseUri: process.env.DBURI,
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
};

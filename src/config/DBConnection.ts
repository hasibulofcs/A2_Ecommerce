import mongoose from "mongoose";
import "colors";
import config from ".";

const DBuri = (config.databaseUri as string).replace(
  "<DBUSERNAME>:<DBPASSWORD>",
  `${config.username as string}:${config.password as string}`,
);

const connectDB = async () => {
  try {
    const connectionStat = await mongoose.connect(DBuri);

    console.log(
      `Database connection successful on ${connectionStat.connection.host}`.blue
        .bold,
    );
  } catch (error) {
    console.log(`Database connection failed. ${error}`);
  }
};

export default connectDB;

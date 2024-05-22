import app from "./app";
import config from "./config";
import connectDB from "./config/DBConnection";
const port = config.port || 3000;

export const bootstrapLoader = () => {
  // CONNECTING TO DATABASE
  connectDB();

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

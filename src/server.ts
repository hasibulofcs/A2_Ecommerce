import app from "./app";
import config from "./config";
import connectDB from "./config/DBConnection";
const port = config.port || 3000;

export const bootstrapLoader = () => {
  // CONNECTING TO DATABASE
  connectDB();

  try {
    app?.listen(port, () => {
      console.log(`E-commerce app listening on port ${port}`);
    });
  } catch (error) {
    console.log(`server failed to start with error ${error}`);
  }
};

bootstrapLoader(); //STARTING THE SERVER

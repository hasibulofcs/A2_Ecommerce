import app from "./app";
import config from "./config";
const port = config.port || 3000;

app.listen(port, () => {
  console.log(`E-commerce app listening on port ${port}`);
});

import app from "./app";
const PORT = process.env.PORT || 3000;

export const bootstrapLoader = () =>
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });

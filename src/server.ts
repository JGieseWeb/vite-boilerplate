import express from "express";

const PORT = process.env.PORT || 3001;

const app = express();

app.use("/storybook", express.static("dist/storybook"));

app.use(express.static("dist/app"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

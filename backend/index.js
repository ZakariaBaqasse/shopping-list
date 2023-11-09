import Express from "express";
import { router as plantRouter } from "./plants/plant.router.js";
import cors from "cors";
import connectToDB from "./config/db.config.js";

const app = Express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/plants", plantRouter);

app.listen(8888, async () => {
  await connectToDB();
  console.log("server is running on: http://localhost:8888");
});

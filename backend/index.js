import Express from "express";
import { router as plantRouter } from "./plants/plant.router.js";
import { router as orderRouter } from "./orders/order.router.js";
import { router as userRouter } from "./user/user.router.js";
import cors from "cors";
import connectToDB from "./config/db.config.js";
import * as dotenv from "dotenv";

const app = Express();

dotenv.config();

app.use(cors());

app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/plants", plantRouter);

app.use("/user", userRouter);

app.use("/order", orderRouter);

app.listen(8888, async () => {
  await connectToDB();
  console.log("server is running on: http://localhost:8888");
});

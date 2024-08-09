import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from 'cors';

dotenv.config();

const app = express();



//middlewares
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(process.env.CONSTR, {
    dbName: "movie-booking-system1",
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((e) => console.log(e));
app.listen(5000, () => {
  console.log(`connected to localhost port ${5000}`);
});

import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE } from "./config.js";
import router from "./Router/auth.js";
const app = express();

//db
mongoose.set("strictQuery", false);
mongoose.connect(DATABASE)
  .then(() => console.log("db_connected"))
  .catch((err) => console.log(err)
  )

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//middlewares routes
app.use('/api', router)



app.listen(4001, () => console.log('server is running on port 4000'));


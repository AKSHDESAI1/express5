import dotenv from "dotenv";
dotenv.config();
import router from "./routes/web.js";
import connectDb from "./db/connectDb.js";
import cors from "cors";

import express from "express";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

app.use(cors({
    origin: "*"
}));

connectDb();

app.use(express.json());
app.use('/student', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

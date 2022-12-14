import express from "express";

import { categoriesRoute } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoute);

app.listen(3333, () => console.log("Server is Running!"));

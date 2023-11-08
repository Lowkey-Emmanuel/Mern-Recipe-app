import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

//Middlewares
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://lowkeyemd:mernrecipeapp@recipes.0llfxr8.mongodb.net/?retryWrites=true&w=majority")

app.listen(8000, () => {
	console.log("We're Live !");
});

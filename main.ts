import express from "express";
import mongoose from "mongoose";
import "dotenv";
import {addMascot} from "./resolvers/postMascota.ts";
import {getMascotId, getMascot} from "./resolvers/getMascota.ts";
import { removeMascot } from "./resolvers/deleteMascota.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");

await mongoose.connect(MONGO_URL);

const app = express();
app.use(express.json());

app
    .get("/api", (req, res) => {
    res.send("Bienvenido a la API-Mascotas");
    })
    .get("/api/mascotas", getMascot)
    .get("/api/mascotas/:id", getMascotId)
    .post("/api/mascotas",addMascot)
    .delete("/api/mascotas/:id",removeMascot)

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
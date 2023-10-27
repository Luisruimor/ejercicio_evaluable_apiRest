import mongoose from "mongoose"
import {MascotModel} from "../db/Schema.ts";
import {ObjectId} from "https://deno.land/x/mongo@v0.32.0/mod.ts";


export const getMascotId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const mascota = await MascotModel.findOne({ _id: new ObjectId(id) }).exec();

        if (!mascota) {
            res.status(404).send("Mascota no encontrada");
            return;
        }
        res.status(200).send(mascota)

    } catch (error) {
        res.status(404).send(error.message);
        return;
    }
};

export const getMascot = async (req: Request, res: Response) => {
    const respuesta = await MascotModel.find();
    res.status(200).send(respuesta);
}
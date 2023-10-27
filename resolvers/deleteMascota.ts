import {MascotModel} from "../db/Schema.ts";
import {ObjectId} from "https://deno.land/x/web_bson@v0.3.0/mod.js";

export const removeMascot = async (req:Request ,res:Response) => {
    try {
        const id = req.params.id;
        const mascota = await MascotModel.findOneAndDelete({ _id: new ObjectId(id) }).exec();

        if (!mascota) {
            res.status(404).send("Mascota no encontrada");
            return;
        }
        res.send("Mascota eliminada")

    } catch (error) {
        res.status(404).send(error.message);
        return;
    }
}
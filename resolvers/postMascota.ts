import { typeMascot } from "../types.ts";
import {MascotModel} from "../db/Schema.ts";

export const addMascot = async (req:Request, res:Response) => {
    try{
        const {name, description, type} = req.body;
        if (!name || !description || !type){
            res.status(406).send("Falta algún valor en el json")
            return
        } else {
            if (typeMascot[type] === undefined) {
                res.status(400).send("El tipo de mascota no es válido")
                return
            }
        }
        const newMascot = new MascotModel ({
            name,
            description,
            type
        })
        await newMascot.save()
        res.status(201).send(newMascot)
    } catch (e) {
        res.status(500).send(e.message);
        return;
    }
}
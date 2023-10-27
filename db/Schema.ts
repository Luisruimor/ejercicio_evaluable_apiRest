import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mascotSchema = new Schema(
    {
        name: { type: String, required: true },
        description: {type: String, required:true},
        type: {type:String,required:true}
    },
    { timestamps: true }
);

export type MascotModelType = mongoose.Document;

export const MascotModel = mongoose.model<MascotModelType>("Mascotas", mascotSchema);
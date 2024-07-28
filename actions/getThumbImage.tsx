'use server';
import path from "path";
import { writeFile } from "fs";


const API_KEY = process.env.API_KEY;

export default async function getThumbImage(id: number) {
    'use server';
    try {
        const res = await fetch('https://fedevtest.azurewebsites.net/thumbs/'+id+".png", {
            method: "GET",
            headers: {"Authorization": `Bearer ${API_KEY}`}
        })
        const buffer = Buffer.from(await res.arrayBuffer());
        writeFile(
        path.join(process.cwd(), "public/static/images/thumbs/"+id+".png"),
            buffer,(err) => {
            if (err) throw err;
        });
        return true;
    } catch (error) {
        throw error;
    }

}
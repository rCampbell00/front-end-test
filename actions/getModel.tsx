'use server';

import { ModelData } from "@/app/page";

const API_KEY = process.env.API_KEY;

export default async function getModelData(id: number) {
    'use server';
    let thumbnails: ModelData;
    return fetch(`https://fedevtest.azurewebsites.net/v1/models/${id}`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${API_KEY}`}
      }).then((response) => {
        if (!response.ok) {
            throw new Error();
        }
        return response.json();
      }).then((content) => {
        thumbnails = content;
        return thumbnails;
    })
}
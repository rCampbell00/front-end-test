'use server';

import { ModelThumbData } from "@/components/modelsList";

const API_KEY = process.env.API_KEY;

export default async function refreshThumbnails() {
    'use server';
    let thumbnails: ModelThumbData[];
    return fetch('https://fedevtest.azurewebsites.net/v1/models', {
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
    }).catch(() => {
        thumbnails = [];
        return thumbnails;
    })
}
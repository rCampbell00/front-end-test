import TitleBar from "@/components/generic/TitleBar"
import ModelsList from "@/components/modelsList";
import ModelScreen from "@/components/modelScreen";
import type { GetStaticProps } from "next";
import { Processor } from "postcss";

type ModelThumbQuery = {
  modelThumbs: ModelThumbData[],
};

export type ModelThumbData = {
  id: number,
  description: string,
  thumbnail: string,
};

export const getStaticProps = (async (context) => {
  const res = await fetch('https://fedevtest.azurewebsites.net/v1/models', {
    method: "GET",
    headers: {"Authorization": `Bearer ${process.env.API_KEY}`}
  }
  )

  try {
    const modelThumbs = await res.json()
    return { props: { modelThumbs } }
  } catch {
    const modelThumbs: ModelThumbQuery = {modelThumbs: []} 
    return { props: { modelThumbs } }
  }

}) satisfies GetStaticProps<{
  modelThumbs: ModelThumbQuery
}>

export default function Page(modelThumbs: ModelThumbQuery) {
  console.log(modelThumbs)
    return (
      <>
        <TitleBar />
        <div className="flex">
          <ModelsList  thumbnails={modelThumbs.modelThumbs}/>
          <ModelScreen />
        </div>
      </>

    );
  }
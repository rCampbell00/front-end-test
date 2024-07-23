import TitleBar from "@/components/generic/TitleBar"
import ModelPanel from "@/components/modelPanel";

export default function Page() {
    return (
      <>
        <TitleBar />
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1 bg-gray-400">
          <ModelPanel id={1} description="24 Hesters Way Road GL51 0DA" thumbnail="/thumbs/1.png"/>
          <ModelPanel id={1} description="24 Hesters Way Road GL51 0DA" thumbnail="/thumbs/1.png"/>
          <ModelPanel id={1} description="24 Hesters Way Road GL51 0DA" thumbnail="/thumbs/1.png"/>
          <ModelPanel id={1} description="24 Hesters Way Road GL51 0DA" thumbnail="/thumbs/1.png"/>
          <ModelPanel id={1} description="24 Hesters Way Road GL51 0DA" thumbnail="/thumbs/1.png"/>
          </div>
          <div className="col-span-4">Test 2</div>
        </div>
      </>

    );
  }
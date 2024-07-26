import TitleBar from "@/components/generic/TitleBar"
import ModelsList from "@/components/modelsList";
import ModelScreen from "@/components/modelScreen";

const API_KEY = process.env.API_KEY;

export default function Page() {
    return (
      <>
        <TitleBar />
        <div className="flex">
          <ModelsList />
          <ModelScreen />
        </div>
      </>

    );
  }
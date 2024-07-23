import TitleBar from "@/components/generic/TitleBar"

export default function Page() {
    return (
      <>
        <TitleBar />
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1 bg-gray-400">Test 1</div>
          <div className="col-span-4">Test 2</div>
        </div>
      </>

    );
  }
import Heading from "./Heading";
import Timer from "./Timer";

export default function Content() {
  return (
    <div className="bg-[url('bg-stars.svg')] bg-contain grid grid-rows-[0.3fr_0.7fr]">
      <Heading />
      <Timer />
    </div>
  );
}

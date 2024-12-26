import { statsData } from "../statsData";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="w-10/12 flex items-start justify-between flex-wrap">
      {statsData.map((item) => (
        <div key={item.id} className="basis-36 flex flex-col items-center justify-center gap-2">
          <div className="flex items-end">
            <CountUp start={0} end={item.value} duration={2} className="text-6xl font-bold" />
            <span className="text-6xl font-bold">{item.unit}</span>
          </div>
          <p className="text-sm text-black font-light">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

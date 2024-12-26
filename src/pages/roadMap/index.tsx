import styles from "./styles.module.css";
import { milestones } from "./timelineData";

export default function RoadMap() {
  return (
    <section className="fluid gridContainer flex-col items-center justify-center gap-20 mx-auto py-10 relative">
      <div className="w-11/12 mx-auto">
        <article className="min-h-[600px] w-full flex flex-col items-center gap-16 text-center">
          <h1 className="relative font-semibold text-[70px] text-white italic">
            RoadMap
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 text-[180px] tracking-[.5rem]">RoadMap</span>
          </h1>
          <div className={` w-1/6 min-h-5 self-center shadow-xl border-b-8 border-solid border-black/50 rounded-xl`}></div>
        </article>
        <article className="flex items-center justify-between">
          <div className="absolute left-0 top-[56%] -translate-y-[56%] w-full h-[2px] bg-white/50"></div>
          {milestones.map((item, index) => (
            <div
              key={index}
              className={`${styles.cardBg} ${
                index % 2 !== 0 ? "translate-y-[-315px] after:-bottom-6" : "after:-top-6"
              } flex flex-col items-center text-center rounded-sm relative z-10  after:content-['|'] after:text-white after:font-semibold after:absolute`}
            >
              <div className={`${styles.cardTop} drop-shadow-xl absolute top-2 left-2 min-w-5 min-h-5 rounded-full -z-10`}></div>
              <div className={`${styles.cardTop} drop-shadow-xl absolute top-2 right-2 min-w-5 min-h-5 rounded-full -z-10`}></div>
              <div className={`${styles.cardTop} drop-shadow-xl absolute bottom-2 left-2 min-w-5 min-h-5 rounded-full -z-10`}></div>
              <div className={`${styles.cardTop} drop-shadow-xl absolute bottom-2 right-2 min-w-5 min-h-5 rounded-full -z-10`}></div>
              <div className="flex flex-col items-center gap-2 py-7">
                <div className="text-white px-3 font-bold text-medium rounded-md">{item.date}</div>
                <div className="flex flex-col items-center gap-6">
                  <div className="text-gray-900 font-semibold rounded-md">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                  <div className="text-black font-semibold text-xl flex flex-col items-center">
                    <span>{item.value}</span>
                    <span className="italic text-white text-[9px] capitalize">total market capitalization</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

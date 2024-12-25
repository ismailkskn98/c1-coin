import logo from "@/assets/logo.webp";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import styles from "./styles.module.css";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  return (
    <section className="w-10/12 flex items-center justify-between mx-auto text-white italic">
      <img src={logo} alt="logo" />
      <div className="relative bg-white/40 py-10 px-6 rounded-xl">
        <div className={`${styles.cardBgTop} absolute bottom-0 left-0 h-20 w-full`}></div>
        <div className={`${styles.cardBgBottom} absolute top-0 left-0 h-20 w-full`}></div>
        <div className={`${styles.cardBgLeft} absolute top-0 left-0 bottom-0 w-20 `}></div>
        <div className={`${styles.cardBgRight} absolute top-0 right-0 bottom-0 w-20`}></div>
        <article className="flex flex-col items-center gap-10 py-10 px-8">
          <div className="flex flex-col items-center gap-3">
            <div className={`${styles.titleShadow} uppercase text-2xl px-8 pt-4 pb-3 drop-shadow-xl`}>
              ICO pre <span className="font-bold text-3xl">-</span> sale is live
            </div>
            <p>ends in:</p>
          </div>
          <div className="grid grid-cols-4 gap-7 text-center text-6xl">
            <div className="space-y-2">
              <div className="relative font-bold">
                {timeLeft.days}
                <span className="absolute -right-6 -top-1 font-bold text-gray-800">:</span>
              </div>
              <div className="text-lg uppercase">Days</div>
            </div>
            <div className="space-y-2">
              <div className="relative font-bold">
                {timeLeft.hours}
                <span className="absolute -right-6 -top-1 font-bold text-gray-800">:</span>
              </div>
              <div className="text-lg uppercase">Hours</div>
            </div>
            <div className="space-y-2">
              <div className="relative font-bold">
                {timeLeft.minutes}
                <span className="absolute -right-6 -top-1 font-bold text-gray-800">:</span>
              </div>
              <div className="text-lg uppercase">Minutes</div>
            </div>
            <div className="space-y-2">
              <div className=" font-bold">{timeLeft.seconds}</div>
              <div className="text-lg uppercase">Seconds</div>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">The clock has stopped!</div>

          <div className="w-full space-y-4">
            <div className="flex justify-between text-sm">
              <span className="relative after:content-['|'] after:absolute after:left-1/2 after:-translate-x-1/2 after:text-white after:-bottom-4">Pre-Sale</span>
              <span className="relative after:content-['|'] after:absolute after:left-1/2 after:-translate-x-1/2 after:text-white after:-bottom-4">Soft Cap</span>
              <span className="relative after:content-['|'] after:absolute after:left-1/2 after:-translate-x-1/2 after:text-white after:-bottom-4">Bonus</span>
            </div>
            <Progress value={0} className="h-2" />
            <div className="flex justify-between text-sm">
              <span>0% target raised</span>
              <span>1+</span>
            </div>
          </div>

          <Button className="w-full flex justify-center items-center gap-10 bg-transparent border-none outline-none shadow-none bebas-neue-regular text-5xl tracking-wider font-bold hover:bg-transparent group">
            <span className="drop-shadow-lg group-hover:text-black transition-all duration-300">BUY TOKENS</span>
            <span className="w-12 h-12 rounded-full bg-[#FEC057] flex items-center justify-center shadow-xl group-hover:bg-white transition-all duration-300">
              <FaPlay className={`min-w-6 min-h-6 group-hover:text-black transition-all duration-300`} />
            </span>
          </Button>
        </article>
      </div>
    </section>
  );
}

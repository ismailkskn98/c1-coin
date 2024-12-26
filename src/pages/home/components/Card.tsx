import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import Counter from "./Counter";

export default function Card() {
  return (
    <article className="flex flex-col items-center gap-10 py-10 px-8">
      <Header />
      <Counter />
      <div className="text-center text-sm text-muted-foreground">The clock has stopped!</div>
      <ProgressBar />
      <Button className="w-full flex justify-center items-center gap-10 bg-transparent border-none outline-none shadow-none bebas-neue-regular text-5xl tracking-wider font-bold hover:bg-transparent group">
        <span className="bg-gradient-to-r from-[#FEC057] to-[#ECB165] text-transparent bg-clip-text drop-shadow-lg group-hover:text-black transition-all duration-300">
          BUY TOKENS
        </span>
        <span className="w-12 h-12 rounded-full bg-[#FEC057] flex items-center justify-center shadow-xl group-hover:bg-white transition-all duration-300">
          <FaPlay className={`min-w-6 min-h-6 group-hover:text-black transition-all duration-300`} />
        </span>
      </Button>
    </article>
  );
}

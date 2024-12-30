import aboutImage from "@/../public/about.png";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import Stats from "./components/Stats";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="w-10/12 flex items-center justify-center text-white mx-auto">
      <article className="flex-1 flex flex-col items-start gap-10">
        <div className="w-10/12 flex flex-col items-start gap-2 italic">
          <h1 className="font-semibold text-4xl">{t("aboutPage.title")}</h1>
          <p className="text-black font-semibold">{t("aboutPage.subtitle")}</p>
        </div>
        <div className="w-10/12 flex flex-col items-start gap-10">
          <p className="font-semibold italic">{t("aboutPage.description")}</p>
          <div className="w-2/3 flex justify-between items-center gap-10 bg-transparent border-none outline-none shadow-none bebas-neue-regular text-5xl tracking-wider font-bold hover:bg-transparent group">
            <span className="bg-gradient-to-r from-[#FEC057] to-[#ECB165] text-transparent bg-clip-text drop-shadow-lg font-bold">
              {t("aboutPage.buyTokens")}
            </span>
            <div className="flex items-center gap-3">
              <Button className="w-12 h-12 rounded-full bg-[#FEC057] flex items-center justify-center group-hover:bg-white transition-all duration-300">
                <FaPlay className={`min-w-6 min-h-6 group-hover:text-black transition-all duration-300`} />
              </Button>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-xs">{t("aboutPage.watchVideo.title")}</span>
                <span className="font-semibold text-[8px]">{t("aboutPage.watchVideo.subtitle")}</span>
              </div>
            </div>
          </div>
          <div
            className={`w-1/2 min-h-5 self-center shadow-xl border-b-8 border-solid border-black/50 rounded-xl`}
          ></div>
        </div>
        <div className="w-10/12 flex flex-col items-start gap-8">
          <h2 className="font-medium text-4xl uppercase">{t("aboutPage.runAnywhere.title")}</h2>
          <p>{t("aboutPage.runAnywhere.description")}</p>
        </div>
        <Stats />
      </article>
      <article className="h-full flex items-end justify-end">
        <img src={aboutImage} alt="about image" className="drop-shadow-2xl" />
      </article>
    </section>
  );
}

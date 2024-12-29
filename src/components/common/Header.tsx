import logo from "@/assets/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import turkce from "@/assets/turkce.jpg";
import ingilizce from "@/assets/ingilizce.jpg";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const navItem: string[] = [
    i18n.language === "en" ? "about" : "hakkımda",
    i18n.language === "en" ? "roadMap" : "yol haritası",
    i18n.language === "en" ? "token" : "token",
    i18n.language === "en" ? "team" : "takım",
    i18n.language === "en" ? "faq" : "sözlük",
    i18n.language === "en" ? "blog" : "blog",
    i18n.language === "en" ? "contact" : "iletişim",
  ];
  return (
    <section className="fluid gridContainer bg-white/10 backdrop-blur-sm">
      <header className="flex items-center justify-between gap-8 py-5">
        <Link to={"/"}>
          <img src={logo} alt="c1 coin logo" className="max-h-14" />
        </Link>
        <nav className="flex-1 flex items-center gap-8">
          {navItem.map((item, index) => (
            <NavLink key={index} to={`/${item}`} className="capitalize font-semibold hover:text-white transition-all duration-300">
              {item}
            </NavLink>
          ))}
        </nav>
        <div className="flex-1 flex items-center justify-end gap-3">
          <Select defaultValue="tr" value={i18n.language} onValueChange={() => i18n.changeLanguage(i18n.language === "en" ? "tr" : "en")}>
            <SelectTrigger className="w-[180px] border-none outline-none shadow-none">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-y-auto !overflow-visible">
              <SelectGroup>
                <SelectLabel>{t("language")}</SelectLabel>
                <SelectItem value="en">
                  <div className="flex items-center gap-2">
                    <img src={ingilizce} alt="english" className="w-6 h-6 rounded-full border border-solid border-neutral-500" />
                    <span>EN</span>
                  </div>
                </SelectItem>
                <SelectItem value="tr">
                  <div className="flex items-center gap-2">
                    <img src={turkce} alt="türkçe" className="w-6 h-6 rounded-full border border-solid border-neutral-500" />
                    <span>TR</span>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-3 capitalize text-sm">
            <Link to={"#"} className="hover:text-white transition-all duration-300">
              {t("login")}
            </Link>
            <Link to={"#"} className="hover:text-white transition-all duration-300">
              {t("register")}
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
}

import logo from "@/assets/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import turkce from "@/assets/turkce.jpg";
import ingilizce from "@/assets/ingilizce.jpg";

export default function Header() {
  const navItem: string[] = ["about", "roadMap", "token", "team", "faq", "blog", "contact"];
  return (
    <section className="fluid gridContainer bg-black/10 backdrop-blur-sm">
      <header className="flex items-center justify-between gap-8 py-5">
        <img src={logo} alt="c1 coin logo" className="max-h-14" />
        <nav className="flex-1 flex items-center gap-8">
          {navItem.map((item, index) => (
            <NavLink key={index} to={`/${item}`} className="capitalize font-semibold hover:text-red-700 transition-all duration-300">
              {item}
            </NavLink>
          ))}
        </nav>
        <div className="flex-1 flex items-center justify-end gap-3">
          <Select defaultValue="tr">
            <SelectTrigger className="w-[180px] border-none outline-none shadow-none">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-y-auto !overflow-visible">
              <SelectGroup>
                <SelectLabel>Dil Seç</SelectLabel>
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
              login
            </Link>
            <Link to={"#"} className="hover:text-white transition-all duration-300">
              register
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
}
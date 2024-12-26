import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { GrSend } from "react-icons/gr";

export default function Footer() {
  return (
    <section className="fluid gridContainer bg-white/10 backdrop-blur-sm">
      <footer className="w-full flex flex-col items-center text-white text-lg italic pt-10 pb-5 gap-8">
        <article className="w-full flex items-start justify-between gap-12">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-1">
                <span>İstanbul</span>
                <p className="text-black">+90 {"(212)"} 444 44 44</p>
              </div>
              <a href="#">info@c1coin.com</a>
            </div>
            <div className="flex flex-col items-start gap-2 capitalize">
              <p>Pazartesi cumartesi: 08:00 22:00</p>
              <p>Pazar: KAPALI</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center capitalize">
            <h4 className="font-semibold">our company</h4>
            <nav className="flex flex-col gap-2 items-center">
              <Link to={"/about"} className="hover:text-black transition-all duration-300">
                about
              </Link>
              <Link to={"/token"} className="hover:text-black transition-all duration-300">
                token
              </Link>
              <Link to={"/team"} className="hover:text-black transition-all duration-300">
                team
              </Link>
              <Link to={"/blog"} className="hover:text-black transition-all duration-300">
                blog
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2 items-center capitalize">
            <h4 className="font-semibold">services</h4>
            <nav className="flex flex-col gap-2 items-center">
              <Link to={"/about"} className="hover:text-black transition-all duration-300">
                roadMap
              </Link>
              <Link to={"/token"} className="hover:text-black transition-all duration-300">
                faq
              </Link>
              <Link to={"/team"} className="hover:text-black transition-all duration-300">
                contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="capitalize">email newsletter</p>
              <p>Subscribe to our newsletter!</p>
            </div>
            <a href="#" className="flex items-center gap-2 group">
              <MdEmail className="text-black group-hover:text-white transition-all duration-300" />
              <span className="group-hover:text-black transition-all duration-300">Email Adress</span>
              <GrSend className="text-black group-hover:text-white transition-all duration-300" />
            </a>
          </div>
        </article>
        <article className="flex items-end justify-center">
          <div className="flex items-end gap-4">
            <div className="flex items-center gap-1">
              <span className="text-black">©</span>
              <p>All rights reserved. Made with</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-black">♡</span>
              <p>By C1Coin</p>
            </div>
          </div>
        </article>
      </footer>
    </section>
  );
}

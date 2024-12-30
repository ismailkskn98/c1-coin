import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, ready } = useTranslation();

  if (!ready) return null;

  return (
    <section className="fluid gridContainer bg-white/10 backdrop-blur-sm">
      <footer className="w-full flex flex-col items-center text-white text-lg italic pt-10 pb-5 gap-8">
        <article className="w-full flex items-start justify-between gap-12">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-1">
                <span>{t("footer.contact.city")}</span>
                <p className="text-black">{t("footer.contact.phone")}</p>
              </div>
              <a href={`mailto:${t("footer.contact.email")}`}>{t("footer.contact.email")}</a>
            </div>
            <div className="flex flex-col items-start gap-2 capitalize">
              <p>{t("footer.workingHours.weekday")}</p>
              <p>{t("footer.workingHours.sunday")}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center capitalize">
            <h4 className="font-semibold">{t("footer.company.title")}</h4>
            <nav className="flex flex-col gap-2 items-center">
              <Link to={"/about"} className="hover:text-black transition-all duration-300">
                {t("footer.company.about")}
              </Link>
              <Link to={"/token"} className="hover:text-black transition-all duration-300">
                {t("footer.company.token")}
              </Link>
              <Link to={"/team"} className="hover:text-black transition-all duration-300">
                {t("footer.company.team")}
              </Link>
              <Link to={"/blog"} className="hover:text-black transition-all duration-300">
                {t("footer.company.blog")}
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2 items-center capitalize">
            <h4 className="font-semibold">{t("footer.services.title")}</h4>
            <nav className="flex flex-col gap-2 items-center">
              <Link to={"/roadmap"} className="hover:text-black transition-all duration-300">
                {t("footer.services.roadMap")}
              </Link>
              <Link to={"/faq"} className="hover:text-black transition-all duration-300">
                {t("footer.services.faq")}
              </Link>
              <Link to={"/contact"} className="hover:text-black transition-all duration-300">
                {t("footer.services.contact")}
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="capitalize">{t("footer.newsletter.title")}</p>
              <p>{t("footer.newsletter.subtitle")}</p>
            </div>
            <a href="#" className="flex items-center gap-2 group">
              <MdEmail className="text-black group-hover:text-white transition-all duration-300" />
              <span className="group-hover:text-black transition-all duration-300">
                {t("footer.newsletter.emailPlaceholder")}
              </span>
              <GrSend className="text-black group-hover:text-white transition-all duration-300" />
            </a>
          </div>
        </article>
        <article className="flex items-end justify-center">
          <div className="flex items-end gap-4">
            <div className="flex items-center gap-1">
              <span className="text-black">©</span>
              <p>{t("footer.copyright.rights")}</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-black">♡</span>
              <p>
                {t("footer.copyright.madeWith")} {t("footer.copyright.by")}
              </p>
            </div>
          </div>
        </article>
      </footer>
    </section>
  );
}

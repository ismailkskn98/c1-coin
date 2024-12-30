import styles from "./styles.module.css";
import Card from "./components/Card";
import logo from "@/../public/c1coinlogo_page.jpg.png";

export default function Home() {
  return (
    <section className="relative w-10/12 flex items-center justify-between mx-auto text-white italic overflow-x-hidden">
      <img src={logo} alt="logo" className="max-h-[650px]" />
      <div className="relative  bg-white/40 py-10 px-6 rounded-xl">
        <div className={`${styles.cardBgTop} absolute bottom-0 left-0 h-20 w-full`}></div>
        <div className={`${styles.cardBgBottom} absolute top-0 left-0 h-20 w-full`}></div>
        <div className={`${styles.cardBgLeft} absolute top-0 left-0 bottom-0 w-20 `}></div>
        <div className={`${styles.cardBgRight} absolute top-0 right-0 bottom-0 w-20`}></div>
        <Card />
      </div>
    </section>
  );
}

import styles from "../styles.module.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-3">
      <div className={`${styles.titleShadow} uppercase text-2xl px-8 pt-4 pb-3 drop-shadow-xl`}>
        ICO pre <span className="font-bold text-3xl">-</span> sale is live
      </div>
      <p>ends in:</p>
    </header>
  );
}

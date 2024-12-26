export default function Token() {
  return (
    <section className="w-10/12 mx-auto flex flex-col items-center justify-center">
      <article className="w-full flex flex-col items-center gap-6 text-end">
        <h1 className="relative font-semibold text-[70px] text-white italic">
          Token Distribution
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 text-[150px] tracking-[.2rem] text-nowrap">Token Distribution</span>
        </h1>
        <div className={`w-1/6 min-h-5 self-center shadow-xl border-b-8 border-solid border-black/50 rounded-xl`}></div>
      </article>
      <p className="text-black max-w-[500px] italic font-semibold text-center mt-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius repudiandae amet libero quod repellendus sunt!
      </p>
      <article></article>
    </section>
  );
}

export default function Blog() {
  return (
    <section className="w-10/12 mx-auto flex flex-col items-center justify-between min-h-[700px]">
      <article className="w-full flex flex-col items-center gap-5">
        <div className="w-full flex flex-col items-center gap-8 text-end">
          <h1 className="relative font-semibold text-[70px] text-white italic">
            Recent Blogs Posts
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 text-[150px] tracking-[.2rem] text-nowrap">Recent Blogs Posts</span>
          </h1>
          <div className={`w-1/6 min-h-5 self-center shadow-xl border-b-8 border-solid border-black/50 rounded-xl`}></div>
        </div>
        <p className="text-black max-w-[500px] italic font-semibold text-center mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius repudiandae amet libero quod repellendus sunt!
        </p>
      </article>
      <article className="flex items-start justify-between italic">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="flex flex-col items-start gap-5 font-semibold">
            <h4 className="flex flex-col items-start font-semibold text-black text-2xl capitalize">
              <span>ICO</span>
              <span>Bitcoin cash price trend including</span>
              <span>tether</span>
            </h4>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, consequuntur?</p>
            <p className="text-black">27th. December 2018</p>
          </div>
        ))}
      </article>
    </section>
  );
}

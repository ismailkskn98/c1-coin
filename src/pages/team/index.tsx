import team from "../../../public/team.png";

export default function Team() {
  return (
    <section className="w-10/12 mx-auto flex flex-col items-center gap-16 justify-center">
      <article className="w-full flex flex-col items-center gap-5">
        <div className="w-full flex flex-col items-center gap-6 text-end">
          <h1 className="relative font-semibold text-[70px] text-white italic">
            Our Team Member
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 text-[150px] tracking-[.2rem] text-nowrap">Our Team Member</span>
          </h1>
          <div className={`w-1/6 min-h-5 self-center shadow-xl border-b-8 border-solid border-black/50 rounded-xl`}></div>
        </div>
        <p className="text-white max-w-[500px] italic font-semibold text-center mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius repudiandae amet libero quod repellendus sunt!
        </p>
      </article>
      <article className="flex items-center justify-between">
        <div className="basis-1/3 flex flex-col items-center gap-3">
          <h3 className="font-semibold text-5xl text-white italic capitalize">Who Are We ?</h3>
          <div className="flex flex-col items-center">
            <p className="capitalize text-white text-center">meet the entire team</p>
            <p className="text-white text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error perferendis vitae molestias! Molestias, assumenda quod. Quae, sunt dolores voluptatibus non ipsum
              porro odit quam magnam aperiam iste, debitis doloribus nostrum!
            </p>
          </div>
        </div>
        <div className="basis-3/4 flex items-end justify-center">
          <img src={team} alt="team" />
        </div>
      </article>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section className="w-10/12 mx-auto flex flex-col items-center gap-16 justify-center">
      <article className="w-full flex flex-col items-center gap-5">
        <div className="w-full flex flex-col items-center gap-8 text-end">
          <h1 className="relative font-semibold text-[70px] text-white italic">
            For ICO Projects
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 text-[150px] tracking-[.2rem] text-nowrap">For ICO Projects</span>
          </h1>
          <div className={`w-1/6 min-h-5 self-center shadow-xl border-b-8 border-solid border-black/50 rounded-xl`}></div>
        </div>
        <p className="text-white max-w-[500px] italic font-semibold text-center mt-5 flex flex-col items-center text-lg">
          <span>Coinsurance invests in promising ICO projects.</span>
          <span>We after you a funfing and access to our community.</span>
        </p>
      </article>
      <form className="w-1/2 flex flex-col gap-3 items-start">
        <div className="w-full flex items-center justify-between gap-10">
          <Input
            placeholder="Your Name"
            type="text"
            className="bg-white/10 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white"
          />
          <Input
            placeholder="E-Mail Adress"
            type="email"
            className="bg-white/10 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white"
          />
        </div>
        <Input
          placeholder="Subject"
          type="text"
          className="bg-white/10 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white"
        />
        <Textarea
          placeholder="Your Comment"
          className="bg-white/10 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none placeholder:text-white resize-none"
          rows={6}
        />
        <Button className="uppercase self-center bg-white/10 backdrop-blur-sm">Send Message</Button>
      </form>
    </section>
  );
}

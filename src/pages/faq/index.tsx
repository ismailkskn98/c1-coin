import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Faq() {
  return (
    <section className="w-10/12 mx-auto flex flex-col items-center gap-16 justify-center">
      <article className="w-full flex flex-col items-center gap-5">
        <div className="w-full flex flex-col items-center gap-8 text-end">
          <h1 className="relative font-semibold text-[70px] text-white italic">
            Frequently Asked Questions
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 text-[120px] tracking-[.1rem] text-nowrap">Frequently Asked Questions</span>
          </h1>
          <div className={`w-1/6 min-h-5 self-center shadow-xl border-b-8 border-solid border-black/50 rounded-xl`}></div>
        </div>
        <p className="text-black max-w-[500px] italic font-semibold text-center mt-5 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius repudiandae amet libero quod repellendus sunt!
        </p>
      </article>
      <article className="w-full">
        <Tabs defaultValue="regular" className="w-full bg-transparent flex flex-col items-center gap-16 italic">
          <TabsList className="w-full flex items-center justify-between bg-transparent">
            <TabsTrigger value="regular" className="flex flex-col items-center text-white text-xl">
              Regular Questation
              <div className={`w-full min-h-5 self-center shadow-xl border-b-2 border-solid border-black/50 rounded-xl`}></div>
            </TabsTrigger>
            <TabsTrigger value="clients" className="flex flex-col items-center text-white text-xl">
              Clients Questation
              <div className={`w-full min-h-5 self-center shadow-xl border-b-2 border-solid border-black/50 rounded-xl`}></div>
            </TabsTrigger>
            <TabsTrigger value="trending" className="flex flex-col items-center text-white text-xl">
              Trending Questation
              <div className={`w-full min-h-5 self-center shadow-xl border-b-2 border-solid border-black/50 rounded-xl`}></div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="regular" className="w-3/4 backdrop-blur-md bg-white/10 px-4 py-3 rounded-lg min-h-32">
            <h3 className="text-lg text-white">What is WrodPress ?</h3>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos, eligendi et quidem praesentium, a mollitia rerum, architecto obcaecati accusamus soluta!
              Atque, laboriosam libero. Quam, eius neque tempore illum recusandae quibusdam, obcaecati corrupti illo quo, optio odio unde consequatur culpa!
            </p>
          </TabsContent>
          <TabsContent value="clients" className="w-3/4 backdrop-blur-md bg-white/10 px-4 py-3 rounded-lg min-h-32">
            <h3 className="text-lg text-white">What is Javascript ?</h3>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum, modi eum pariatur non similique tenetur inventore aut quis, commodi, assumenda voluptate
              perferendis consequatur illo dolore omnis! Rerum quam soluta porro omnis hic dicta dolore reprehenderit quo amet. Veritatis accusantium aperiam tempora, cumque ab
              officiis?
            </p>
          </TabsContent>
          <TabsContent value="trending" className="w-3/4 backdrop-blur-md bg-white/10 px-4 py-3 rounded-lg min-h-32">
            <h3 className="text-lg text-white">What is CMS ?</h3>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dignissimos? Tempora porro provident obcaecati at maxime perferendis enim quo facere magni, aspernatur
              facilis perspiciatis! Ipsa, labore quos dolores quo facilis doloremque numquam iure necessitatibus impedit et beatae, perspiciatis incidunt dolor velit asperiores
              consectetur temporibus! Qui incidunt eveniet quae sint veritatis.
            </p>
          </TabsContent>
        </Tabs>
      </article>
    </section>
  );
}

import { Button } from "./ui/button";
import Link from "next/link";
import { Reveal, Parallax, Magnetic } from "./animations/Motion";

const Cta = () => {
  return (
    <section className="relative isolate overflow-hidden py-24 bg-tertiary dark:bg-secondary/40">
      {/* parallax shapes */}
      <Parallax speed={0.5} className="pointer-events-none absolute -z-10 -left-16 top-0">
        <div className="w-48 h-48 rounded-full border-[24px] border-primary/10" />
      </Parallax>
      <Parallax speed={-0.6} className="pointer-events-none absolute -z-10 right-10 bottom-0">
        <div className="w-32 h-32 rotate-12 rounded-3xl bg-primary/10" />
      </Parallax>
      <Parallax speed={0.3} className="pointer-events-none absolute -z-10 right-1/4 top-6">
        <div className="w-6 h-6 rounded-full bg-primary/30" />
      </Parallax>

      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <Reveal>
            <h2 className="h2 max-w-xl text-center mb-8">
              Prepared to turn your ideas into reality? I'm here to help
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Magnetic>
              <Link href={"/contact"}>
                <Button>Contact me</Button>
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Cta;

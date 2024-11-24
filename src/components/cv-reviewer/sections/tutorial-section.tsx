import Image from "next/image";

export default function CvReviewTutorialSection() {
  return (
    <section className="py-10 px-4 md:px-[120px] relative space-y-11">
      <div className="absolute size-[400px] -z-10 -bottom-48 -right-60 opacity-80">
        <Image
          src={"/assets/img/cv-review/blurred-circle-purple.png"}
          alt="Circle"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
        <h2 className="text-5xl sm:text-6xl md:text-7xl shrink-0 bg-gradient-to-r bg-clip-text from-[#9299F5] to-[#482796]">
          How <span className="text-transparent font-extrabold">Review</span>{" "}
          <br />
          <span className="text-transparent font-extrabold">CV AI</span>{" "}
          <span className="italic">Works</span>
        </h2>
        <p className="text-lg sm:text-2xl">
          CV AI analyzes your CV, assessing experience, skills, and format, then
          provides feedback and improvement suggestions to make it more
          appealing to recruiters.
        </p>
      </div>
      <div className="bg-neutral-500 aspect-video rounded"></div>
    </section>
  );
}

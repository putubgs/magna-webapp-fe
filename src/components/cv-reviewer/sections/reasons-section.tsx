import { reasons } from "@/data/cvReviewReasonsData";
import Image from "next/image";

export default function CvReviewReasonsSection() {
  return (
    <section className="flex flex-col md:flex-row px-4 md:px-[120px] gap-10 py-10">
      <div className="basis-2/5 relative">
        <div className="absolute size-[600px] -z-10 -top-32 -left-96">
          <Image
            src={"/assets/img/cv-review/blurred-circle-purple.png"}
            alt="Circle"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
          />
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold">
          <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#9299F5] to-[#482796]">
            5 Reason&apos;s
          </span>{" "}
          Why Choose Magna Review CV with AI
        </h2>
      </div>
      <div className="basis-3/5 pt-5 flex flex-col gap-10">
        {reasons.map(({ title, description }, index) => (
          <div key={title + index} className="flex gap-5">
            <div className="p-[10px] size-8 flex items-center justify-center shrink-0 bg-gradient-to-r from-[#9299F5] to-[#482796] rounded-full text-lg">
              {index + 1}
            </div>
            <div className="text-lg sm:text-xl space-y-2">
              <h3 className="font-extrabold">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

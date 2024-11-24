"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CvReviewTutorialSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // 10% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && isVisible && !hasPlayedOnce) {
      videoRef.current
        .play()
        .then(() => {
          setHasPlayedOnce(true);
        })
        .catch((error) => {
          console.error("Autoplay failed:", error);
        });
    } else if (videoRef.current && !isVisible) {
      videoRef.current.pause();
    }
  }, [isVisible, hasPlayedOnce]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

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
      <div className="bg-neutral-500 aspect-video rounded relative">
        <video
          ref={videoRef}
          controls
          loop
          playsInline
          muted={isMuted}
          width={300}
          height={300}
          className="size-full"
        >
          <source src={"/assets/video/hero-video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 3v18" />
              <path d="M17 8v8" />
              <path d="M7 8v8" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";

export default function SelectLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("indonesia");

  const handleChooseLanguage = (lang: string) => {
    setSelectedLanguage(lang);
  };
  return (
  <div className="mt-10">
    <p className="text-lg">Select Your Language</p>
    <div className="flex gap-2 mt-2">
      <button
        onClick={() => handleChooseLanguage("indonesia")}
        className={`${
          selectedLanguage == "indonesia"
            ? "border-[#3B3B3B] bg-[#0B0D12] border"
            : ""
        } rounded-sm px-2 py-3 flex-1 flex justify-center items-center `}
      >
        <p>🇮🇩 Indonesia</p>
      </button>
      <button
        onClick={() => handleChooseLanguage("english")}
        className={`${
          selectedLanguage == "english"
            ? "border-[#3B3B3B] bg-[#0B0D12] border"
            : ""
        } rounded-sm px-2 py-3 flex-1 flex justify-center items-center `}
      >
        <p>🇺🇸 English</p>
      </button>
    </div>
  </div>
  );
}

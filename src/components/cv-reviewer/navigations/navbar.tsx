"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

export default function CvReviewerNavbar() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  function handleBurger() {
    setBurgerStatus(!burgerStatus);
  }

  return (
    <nav className="sticky top-0 bg-black z-[50] flex justify-between py-6 px-4 md:px-[120px] items-center shadow-md">
      <Link className="flex items-center space-x-4 cursor-poointe" href="#main">
        <Image
          src="/assets/logo/business-units/Magna.png"
          alt="Magna Logo"
          width={30}
          height={56}
          style={{ width: "auto", height: "auto" }}
        />

        <div className="md:text-[24px] text-[18px] font-extrabold">
          Magna Partners
        </div>
      </Link>
      <div className="hidden md:flex space-x-12 items-center">
        <Select defaultValue="en">
          <SelectTrigger className="!text-base">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="id">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <p>🇮🇩</p> <p>Indonesia</p>
              </div>
            </SelectItem>
            <SelectItem value="en">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <p>🇺🇸</p> <p>English</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <Link href="#upload" className="cursor-pointer">
          CV Review
        </Link>
        <Button className="">Login</Button>
      </div>
      <div
        className={`block md:hidden ham-menu ${burgerStatus ? "active" : ""}`}
        onClick={handleBurger}
      >
        <span></span>
        <span></span>
      </div>
      {burgerStatus && (
        <div className="flex flex-col bg-black w-48 h-40 rounded-xl absolute right-6 top-20 p-4 z-99 space-y-[12px] md:hidden">
          <Select defaultValue="en">
            <SelectTrigger className="!text-base">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="id">
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <p>🇮🇩</p> <p>Indonesia</p>
                </div>
              </SelectItem>
              <SelectItem value="en">
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <p>🇺🇸</p> <p>English</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <Link href="#upload" className="cursor-pointer">
            CV Review
          </Link>
          <Button className="">Login</Button>
        </div>
      )}
    </nav>
  );
}

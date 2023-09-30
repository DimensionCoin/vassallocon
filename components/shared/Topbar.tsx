"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Topbar() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = 1 - window.scrollY / window.innerHeight;
      setOpacity(Math.max(newOpacity, 0));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="flex justify-between bg-[#709b72be] p-3 px-4"
      style={{ position: "sticky", top: 0, opacity: opacity, zIndex: 1000 }}
    >
      <div className="">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            height={60}
            width={60}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="flex mt-2">
        <div className="hidden sm:hidden md:flex gap-6 mr-4 ">
          <a href="tel:4167023183" title="Call us at 4167023183">
            <Image
              src="/phone.svg"
              alt="phone"
              height={30}
              width={30}
              className="mt-1 "
            />
          </a>
          <a
            href="https://www.instagram.com/vassallotyler/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our Instagram page"
          >
            <Image
              src="/insta.svg"
              alt="Instagram"
              height={30}
              width={30}
              className="mt-1 "
            />
          </a>
        </div>
        <div>
          <Sheet>
            <SheetTrigger>
              <Image src="/burger.svg" alt="menu" height={40} width={40} />
            </SheetTrigger>
            <SheetContent>
              <div className="mt-10 flex flex-col gap-14">
                <Link href="/outdoor">
                  <span className="flex gap-8 bg-[#2e2e2e5b] rounded-lg p-6 hover:shadow-md hover:shadow-black">
                    <Image
                      src="/hammer.svg"
                      alt="oudoor jobs"
                      height={50}
                      width={50}
                    />
                    <h1 className="text-3xl mt-2 font-bold">Outdoor</h1>
                  </span>
                </Link>
                <Link href="/indoor">
                  <span className="flex gap-8 bg-[#2e2e2e5b] rounded-lg p-6 hover:shadow-md hover:shadow-black">
                    <Image
                      src="/hammer.svg"
                      alt="indoor jobs"
                      height={50}
                      width={50}
                    />
                    <h1 className="text-3xl mt-2 font-bold">Indoor</h1>
                  </span>
                </Link>
                <Link href="/office">
                  <span className="flex gap-8 bg-[#2e2e2e5b] rounded-lg p-6 hover:shadow-md hover:shadow-black">
                    <Image
                      src="/hammer.svg"
                      alt="Office jobs"
                      height={50}
                      width={50}
                    />
                    <h1 className="text-3xl mt-2 font-bold">Office</h1>
                  </span>
                </Link>
                <Link href="/other">
                  <span className="flex gap-8 bg-[#2e2e2e5b] rounded-lg p-6 hover:shadow-md hover:shadow-black">
                    <Image
                      src="/hammer.svg"
                      alt="other"
                      height={50}
                      width={50}
                    />
                    <h1 className="text-3xl mt-2 font-bold">Other</h1>
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="flex gap-8 bg-[#2e2e2e5b] rounded-lg p-6 hover:shadow-md hover:shadow-black">
                    <Image
                      src="/contact.svg"
                      alt="jobs"
                      height={50}
                      width={50}
                    />
                    <h1 className="text-3xl mt-2 font-bold">contact</h1>
                  </span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;

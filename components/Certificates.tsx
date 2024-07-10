"use client";

import React from "react";
import { GlareCard } from "./ui/GlareCard";
import { certificates } from "@/data";

const Certificates = () => {
  return (
    <div className="py-20" id="certificates">
      <h1 className="heading">
        My <span className="text-purple">Certificates</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-20 gap-y-10 my-16">
        {certificates.map((card) => (
          <div
            key={card.id}
            className="w-full h-full mt-5 flex items-center flex-col"
          >
            <GlareCard className="flex flex-col items-center justify-around gap-3 p-5">
              <h2 className="md:text-3xl font-bold text-xl text-center">
                {card.title}
              </h2>
              <p className="md:text-lg font-light text-sm">{card.des}</p>
            </GlareCard>
            <div className="mt-5 border border-white-200 px-4 py-2 w-fit rounded-3xl">
              <a
                className="md:text-lg font-light hover:font-bold"
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                See certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

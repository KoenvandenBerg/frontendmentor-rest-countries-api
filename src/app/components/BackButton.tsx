"use client";

import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex justify-between items-center px-10 w-[6.5rem] h-8 sm:w-[7.5rem] sm:h-9 md:w-[8.5rem] md:h-10 bg-light-elements dark:bg-dark-elements rounded-[0.3125rem] shadow-md shadow-box-shadow hover:scale-105"
    >
      <MdArrowBack className="w-4 h-4" />
      Back
    </button>
  );
}

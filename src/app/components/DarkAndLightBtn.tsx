"use client";
import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { LuMoonStar } from "react-icons/lu";

type Props = {};

//resolvedtheme act as useState hooks
export default function DarkAndLightBtn({}: Props) {
  const { setTheme, resolvedTheme } = useTheme();

  const toogleDark = () => {
    if (resolvedTheme === "light") setTheme("dark");
    if (resolvedTheme === "dark") setTheme("light");
  };

  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">{resolvedTheme === "light" ? "DARK" : "lIGHT"}</p>
      <button onClick={toogleDark} className="text-2xl">
        {resolvedTheme === "light" ? <LuMoonStar /> : <IoSunnyOutline />}
      </button>
    </div>
  );
}

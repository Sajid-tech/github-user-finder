import React from "react";
import { IoSunnyOutline } from "react-icons/io5";

type Props = {};

export default function DarkAndLightBtn({}: Props) {
  return (
    <div className="flex items-center gap-2">
      <p>LIGHT</p>
      <IoSunnyOutline className="text-2xl" />
    </div>
  );
}

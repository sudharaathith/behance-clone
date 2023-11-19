import Download from "@/SVG/Download";
import { images } from "@/utils/cards";
import Image from "next/image";
import React from "react";

function CardArea(props) {
  return (
    <div
      id="cardarea"
      className="  min-h-[400px] grid gap-12 p-12 mt-10 grid-cols-4 "
    >
      {images.map((e) => (
        <Card obj={e} />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div className=" group relative">
      <img className="w-full group-hover:brightness-75 cursor-pointer transition-all aspect-[25/19] rounded" src={props.obj.url} />
      <div className="flex flex-col">
        <div className=" text-base font-semibold hover:underline cursor-pointer">{props.obj.name}</div>
        <div className=" text-xs text-gray-600">{props.obj.authors}</div>
      </div>
      <a href={props.obj.url} download className=" group-hover:flex opacity-0 translate-y-4 group-hover:opacity-70 ease-in-out group-hover:translate-y-0 justify-center items-center gap-2 px-3 py-1 backdrop-blur-3xl cursor-pointer hover:opacity-80 bg-black rounded-full transition-all backdrop:blur-3xl hidden absolute top-4 left-4"
      >
        <Download className="w-4 h-4 fill-white" />
        <span className="text-white font-semibold" >Save</span>
      </a>
    </div>
  );
}

export default CardArea;

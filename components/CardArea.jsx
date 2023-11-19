"use client";
import Download from "@/SVG/Download";
import { images } from "@/utils/cards";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Like from "@/SVG/Like";
import View from "@/SVG/View";

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}

function CardArea(props) {
  const pr = useSearchParams();
  const [open, setOpen] = useState(null);
  const cat = pr.get("cat") || "Projects";
  const sort = pr.get("sort") || "Recommended";
  const [ls, setLs] = useState(images.filter((e) => e.catogary === cat));
  useEffect(() => {
    let t = images.filter((e) => e.catogary === cat);
    if (sort === "Curated") t = t.sort((a, b) => a.rank - b.rank);
    else if (sort === "Most Appreciated")
      t = t.sort((a, b) => b.likes - a.likes);
    else if (sort === "Most Viewed") t = t.sort((a, b) => b.views - a.views);
    else if (sort === "Most Discussed")
      t = t.sort((a, b) => b.discussed - a.discussed);
    else if (sort === "Recent")
      t = t.sort((a, b) => new Date(b.date) - new Date(a.date));
    setLs(t);
  }, [cat, sort]);

  useEffect(() => {
    if (open) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }, [open]);
  return (
    <div
      id="cardarea"
      className="  min-h-[400px] grid gap-12 p-3 sm:p-12 mt-10 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 "
    >
      {ls.map((e, n) => (
        <Card setOpen={setOpen} key={n} obj={e} />
      ))}
      {open && (
        <div className=" fixed flex w-screen h-screen top-0 left-0 bg-neutral-950/20 backdrop-blur-sm z-50">
          <div
            className=" font-semibold bg-black rounded-full text-white absolute right-0 top-0 w-fit h-fit my-2 mx-5 py-2 px-3 cursor-pointer select-none"
            onClick={() => setOpen(null)}
          >
            X
          </div>
          <div className="m-auto">
            <img className=" min-h-[300px]" src={open} />
          </div>
        </div>
      )}
    </div>
  );
}

function numNormz(num) {
  if (Math.abs(num) > 99999) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (Math.abs(num) > 999) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
}

function Card(props) {
  const [like, setLike] = useState(false);
  const ref = useRef(0);
  return (
    <div
      className=" group relative"
      onClick={() => {
        props.setOpen(props.obj.url);
      }}
    >
      <img
        className="w-full group-hover:brightness-75 cursor-pointer transition-all aspect-[25/19] rounded"
        src={props.obj.url}
      />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className=" text-base font-semibold hover:underline cursor-pointer">
            {props.obj.name}
          </div>
          <div className=" text-xs text-gray-600">{props.obj.authors}</div>
        </div>
        <div className="flex p-3 fill-gray-500 text-gray-500 gap-3">
          <div
            className="flex text-[11px] items-center gap-1"
            onClick={() => {
              setLike(!like);
            }}
          >
            <Like ref={ref} className={"w-4 h-4 "} />
            <span>{numNormz(props.obj.likes)}</span>
          </div>
          <div className="flex text-[11px] items-center gap-1">
            <View className="w-4 h-4 " />
            <span>{numNormz(props.obj.views)}</span>
          </div>
        </div>
      </div>

      <a
        href={props.obj.url}
        download
        className=" group-hover:flex opacity-0 translate-y-4 group-hover:opacity-70 ease-in-out group-hover:translate-y-0 justify-center items-center gap-2 px-3 py-1 backdrop-blur-3xl cursor-pointer hover:opacity-80 bg-black rounded-full transition-all backdrop:blur-3xl hidden absolute top-4 left-4"
      >
        <Download className="w-4 h-4 fill-white" />
        <span className="text-white font-semibold">Save</span>
      </a>
    </div>
  );
}

export default CardArea;

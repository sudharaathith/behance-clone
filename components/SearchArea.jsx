"use client";
import Edit from "@/SVG/Edit";
import Search from "@/SVG/Search";
import { useEffect, useRef, useState } from "react";
import Options from "./Options";

const op = [
  {name:"Recommended"},
  {name:"Curated"},
  {name:"Most Appreciated"},
  {name:"Most Viewed"},
  {name:"Most Discussed"},
]

function SearchArea() {
  const ref = useRef(0);
  const topOffset = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerWidth >= 768) {
          // Assuming 'md' screen size in Tailwind is 768px
          if (!topOffset.current) {
            topOffset.current =
              ref.current.getBoundingClientRect().top + window.pageYOffset - 46; // Set the desired top offset in pixels
          }

          const scrollY = window.scrollY || window.pageYOffset;
          if (scrollY > topOffset.current) {
            ref.current.style.position = "fixed";
            ref.current.style.top = `57px`;
          } else {
            ref.current.style.position = "static";
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col py-5 shadow-md justify-center items-center  bg-white w-full max-md:fixed max-md:top-[57px] px-3"
    >
      <div className="flex w-full rounded-full border items-center px-3 gap-2">
        <div className="flex w-full items-center py-1 gap-2 border-r">
          <Search className="w-5 h-5 fill-gray-500" />
          <input
            className="w-full self-end font-semibold text-lg outline-none"
            type="text"
            placeholder="Search the creative world at work"
          />
        </div>
        <Filter />
      </div>
      <div className="flex w-full">
        <div className="ml-auto">
        <Options name="sort" options={op}/>
        </div>
      </div>
    </div>
  );
}

function FilterItem(props) {
  return (
    <div
      onClick={props.onClick}
      className={` font-semibold text-[10px] cursor-pointer ${
        props.select
          ? "bg-black text-white"
          : "bg-white text-black hover:bg-gray-100"
      } px-3 rounded-full py-1`}
    >
      {props.children}
    </div>
  );
}

function Filter(props) {
  const [select, setSelect] = useState(0);
  return (
    <div className=" flex gap-1 px-1">
      <FilterItem
        select={select == 0}
        onClick={() => {
          setSelect(0);
        }}
      >
        Projects
      </FilterItem>
      <FilterItem
        select={select == 1}
        onClick={() => {
          setSelect(1);
        }}
      >
        Assets
      </FilterItem>
      <FilterItem
        select={select == 2}
        onClick={() => {
          setSelect(2);
        }}
      >
        Images
      </FilterItem>
      <FilterItem
        select={select == 3}
        onClick={() => {
          setSelect(3);
        }}
      >
        Prototype
      </FilterItem>
      <FilterItem
        select={select == 4}
        onClick={() => {
          setSelect(4);
        }}
      >
        Streams
      </FilterItem>
      <FilterItem
        select={select == 5}
        onClick={() => {
          setSelect(5);
        }}
      >
        People
      </FilterItem>
      <FilterItem
        select={select == 6}
        onClick={() => {
          setSelect(6);
        }}
      >
        Moodbord
      </FilterItem>
    </div>
  );
}

export default SearchArea;

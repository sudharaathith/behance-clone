"use client";
import Edit from "@/SVG/Edit";
import Search from "@/SVG/Search";
import { useEffect, useRef, useState } from "react";
import Options from "./Options";
import SearchBar from "./SearchBar";


function SearchArea() {
  const ref = useRef(0);
  const topOffset = useRef(false);
  const [time, setTime] = useState(false)
  const op = [
    {name:"Recommended", callBack:()=>{setTime(false)}},
    {name:"Curated", callBack:()=>{setTime(false)}},
    {name:"Most Appreciated", callBack:()=>{setTime(true)}},
    {name:"Most Viewed", callBack:()=>{setTime(true)}},
    {name:"Most Discussed", callBack:()=>{setTime(true)}},
    {name:"Recent" , callBack:()=>{setTime(false)}}
  ]
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
          ref.current.style.position = "fixed";
          const el = document.getElementById("cardarea");
          if (scrollY > topOffset.current) {
            console.log(el)
            ref.current.style.top = `57px`;
            el.style.marginTop = "127px"
          } else {
            ref.current.style.position = "static";
            el.style.marginTop = "10px"
            
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
      className="flex z-10 flex-col py-5 shadow-md justify-center items-center gap-2 bg-white w-full max-md:fixed max-md:top-[57px] px-3"
    >
      <div className="flex w-full rounded-r-full items-center px-3">
        <SearchBar />
        <Filter />
      </div>
      <div className="flex w-full">
        <div className="ml-auto flex gap-7 mr-7">
        <Options name="sort" options={op}/>
        {time&&<Options name="Time" options={op} />}
        </div>
      </div>
    </div>
  );
}

function FilterItem(props) {
  return (
    <div
      onClick={props.onClick}
      className={` font-semibold text-[13px] cursor-pointer ${
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
    <div className=" flex gap-1 border py-2 px-3 rounded-r-full border-l-0">
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

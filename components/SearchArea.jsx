"use client";
import Edit from "@/SVG/Edit";
import Search from "@/SVG/Search";
import { useEffect, useRef, useState } from "react";
import Options from "./Options";
import SearchBar from "./SearchBar";
import { useRouter, useSearchParams } from "next/navigation";

function SearchArea() {
  const ref = useRef(0);
  const pr = useSearchParams();
  const router = useRouter();
  const cat = pr.get("cat") || "Projects";
  const sot = pr.get("sort") || "Recommended";
  const topOffset = useRef(false);
  const [time, setTime] = useState(false);
  const op = [
    {
      name: "Recommended",
      callBack: () => {
        setTime(false);
        router.push("/?cat=" + cat + "&sort=Recommended",  { scroll: false });
      },
    },
    {
      name: "Curated",
      callBack: () => {
        setTime(false);
        router.push("/?cat=" + cat + "&sort=Curated",  { scroll: false });
      },
    },
    {
      name: "Most Appreciated",
      callBack: () => {
        setTime(true);
        router.push("/?cat=" + cat + "&sort=Most%20Appreciated",  { scroll: false });
      },
    },
    {
      name: "Most Viewed",
      callBack: () => {
        setTime(true);
        router.push("/?cat=" + cat + "&sort=Most%20Viewed",  { scroll: false });
      },
    },
    {
      name: "Most Discussed",
      callBack: () => {
        setTime(true);
        router.push("/?cat=" + cat + "&sort=Most%20Discussed",  { scroll: false });
      },
    },
    {
      name: "Recent",
      callBack: () => {
        setTime(false);
        router.push("/?cat=" + cat + "&sort=Recent",  { scroll: false });
      },
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerWidth >= 768) {
          if (!topOffset.current) {
            topOffset.current =
              ref.current.getBoundingClientRect().top + window.pageYOffset - 46;
          }

          const scrollY = window.scrollY || window.pageYOffset;
          ref.current.style.position = "fixed";
          const el = document.getElementById("cardarea");
          if (scrollY > topOffset.current) {
            ref.current.style.top = `57px`;
            el.style.marginTop = "127px";
          } else {
            ref.current.style.position = "static";
            el.style.marginTop = "10px";
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
          <Options name="sort" options={op} />
          {/* {time&&<Options name="Time" options={op} />} */}
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

const cats = [
  "Projects",
  "Assets",
  "Images",
  "Prototype",
  "Streams",
  "People",
  "Moodbord",
];

function Filter(props) {
  const router = useRouter();
  const pr = useSearchParams();
  const cat = pr.get("cat") || "Projects";
  const sot = pr.get("sort") || "Recommended";
  const [select, setSelect] = useState(cat.indexOf(pr));
  useEffect(() => {
    setSelect(cats.indexOf(cat));
  }, [cat]);
  return (
    <div className=" flex gap-1 border py-2 px-3 rounded-r-full border-l-0">
      <FilterItem
        select={select == 0}
        onClick={(e) => {
          setSelect(0);
          router.push("/?cat=" + e.target.innerText+"&sort="+sot, { scroll: false });
        }}
      >
        Projects
      </FilterItem>
      <FilterItem
        select={select == 1}
        onClick={(e) => {
          setSelect(1);
          router.push("/?cat=" + e.target.innerText+"&sort="+sot, { scroll: false });
        }}
      >
        Assets
      </FilterItem>
      <FilterItem
        select={select == 2}
        onClick={(e) => {
          setSelect(2);
          router.push("/?cat=" + e.target.innerText+"&sort="+sot, { scroll: false });
        }}
      >
        Images
      </FilterItem>
      <FilterItem
        select={select == 3}
        onClick={(e) => {
          setSelect(3);
          router.push("/?cat=" + e.target.innerText+"&sort="+sot, { scroll: false });
        }}
      >
        Prototype
      </FilterItem>
      <FilterItem
        select={select == 4}
        onClick={(e) => {
          setSelect(4);
          router.push("/?cat=" + e.target.innerText+"&sort="+sot, { scroll: false });
        }}
      >
        Streams
      </FilterItem>
      <FilterItem
        select={select == 5}
        onClick={(e) => {
          setSelect(5);
          router.push("/?cat=" + e.target.innerText+"&sort="+sot, { scroll: false });
        }}
      >
        People
      </FilterItem>
      <FilterItem
        select={select == 6}
        onClick={(e) => {
          setSelect(6);
          router.push("/?cat=" + e.target.innerText+"&sort="+sot, { scroll: false });
        }}
      >
        Moodbord
      </FilterItem>
    </div>
  );
}

export default SearchArea;

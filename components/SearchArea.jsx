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
        router.push("/?cat=" + cat + "&sort=Recommended", { scroll: false });
      },
    },
    {
      name: "Curated",
      callBack: () => {
        setTime(false);
        router.push("/?cat=" + cat + "&sort=Curated", { scroll: false });
      },
    },
    {
      name: "Most Appreciated",
      callBack: () => {
        setTime(true);
        router.push("/?cat=" + cat + "&sort=Most%20Appreciated", {
          scroll: false,
        });
      },
    },
    {
      name: "Most Viewed",
      callBack: () => {
        setTime(true);
        router.push("/?cat=" + cat + "&sort=Most%20Viewed", { scroll: false });
      },
    },
    {
      name: "Most Discussed",
      callBack: () => {
        setTime(true);
        router.push("/?cat=" + cat + "&sort=Most%20Discussed", {
          scroll: false,
        });
      },
    },
    {
      name: "Recent",
      callBack: () => {
        setTime(false);
        router.push("/?cat=" + cat + "&sort=Recent", { scroll: false });
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
            ref;
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
      className="flex max-md:top-[48px] z-10 flex-col py-5 shadow-md justify-center items-center gap-2 bg-white w-full max-md:fixed px-3"
    >
      <div className="flex w-full max-sm:flex-col rounded-r-full items-center px-3">
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
      onClick={(e)=>{props.onClick(e);props.setOpen(false)}}
      className={` font-semibold text-[13px]  cursor-pointer ${
        props.select
          ? "bg-black text-white"
          : "bg-white text-black hover:bg-gray-100"
      } px-3 max-lg:rounded-xl rounded-full py-1`}
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
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setSelect(cats.indexOf(cat));
  }, [cat]);
  return (
    <div className="max-lg:w-2/5 max-sm:w-full max-sm:mt-1 relative" >
      <button className={((open)?" rounded-t-full border-b-0 ":" transition-all  rounded-r-full max-sm:rounded-l-full ")+"  lg:hidden border w-full py-2 px-3 sm:border-l-0  min-w-[160px]"} onClick={()=>{setOpen(!open)}}>Filter</button>
      <div className={((open)?"expanding":" closing")+" ease-in-out gap-1 max-lg:p-3 bg-white lg:rounded-full max-lg:rounded-b-3xl lg:px-3 lg:border-l-0 lg:rounded-l-none lg:py-2 border max-lg:border-t-0 max-lg:shadow-md max-lg:w-full max-lg:absolute flex max-lg:flex-col "}>
        <FilterItem
          setOpen={setOpen}
          select={select == 0}
          onClick={(e) => {
            setSelect(0);
            console.log(e.target.innerText);
            router.push("/?cat=" + e.target.innerText + "&sort=" + sot, {
              scroll: false,
            });
          }}
        >
          Projects
        </FilterItem>
        <FilterItem
          setOpen={setOpen}
          select={select == 1}
          onClick={(e) => {
            setSelect(1);
            console.log(e.target.innerText);
            router.push("/?cat=" + e.target.innerText + "&sort=" + sot, {
              scroll: false,
            });
          }}
        >
          Assets
        </FilterItem>
        <FilterItem
          setOpen={setOpen}
          select={select == 2}
          onClick={(e) => {
            setSelect(2);
            console.log(e.target.innerText);
            router.push("/?cat=" + e.target.innerText + "&sort=" + sot, {
              scroll: false,
            });
          }}
        >
          Images
        </FilterItem>
        <FilterItem
          setOpen={setOpen}
          select={select == 3}
          onClick={(e) => {
            setSelect(3);
            console.log(e.target.innerText);
            router.push("/?cat=" + e.target.innerText + "&sort=" + sot, {
              scroll: false,
            });
          }}
        >
          Prototype
        </FilterItem>
        <FilterItem
          setOpen={setOpen}
          select={select == 4}
          onClick={(e) => {
            setSelect(4);
            console.log(e.target.innerText);
            router.push("/?cat=" + e.target.innerText + "&sort=" + sot, {
              scroll: false,
            });
          }}
        >
          Streams
        </FilterItem>
        <FilterItem
          setOpen={setOpen}
          select={select == 5}
          onClick={(e) => {
            setSelect(5);
            console.log(e.target.innerText);
            router.push("/?cat=" + e.target.innerText + "&sort=" + sot, {
              scroll: false,
            });
          }}
        >
          People
        </FilterItem>
        <FilterItem
          setOpen={setOpen}
          select={select == 6}
          onClick={(e) => {
            setSelect(6);
            console.log(e.target.innerText);
            router.push("/?cat=" + e.target.innerText + "&sort=" + sot, {
              scroll: false,
            });
          }}
        >
          Moodbord
        </FilterItem>
      </div>
    </div>
  );
}

export default SearchArea;

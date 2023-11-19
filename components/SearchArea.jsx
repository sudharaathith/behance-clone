"use client"
import Edit from "@/SVG/Edit";
import Search from "@/SVG/Search";
import { useEffect, useRef } from "react";

function SearchArea() {
    const ref = useRef(0);
    const topOffset = useRef(false)
    useEffect(() => {
        const handleScroll = () => {
          if (ref.current) {
            if (window.innerWidth >= 768) { // Assuming 'md' screen size in Tailwind is 768px
              if (!topOffset.current) {
                topOffset.current = ref.current.getBoundingClientRect().top + window.pageYOffset - 46; // Set the desired top offset in pixels
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
    <div ref={ref} className="flex py-5 shadow-md  bg-white w-full max-md:fixed max-md:top-[57px]">
      <div>
        <Edit />
        <button>Filter</button>
      </div>
      <div className="flex w-full rounded-full border items-center py-1 px-3 gap-2">
        <Search className="w-5 h-5 fill-gray-500" />
        <input className="w-full self-end font-semibold text-lg outline-none" type="text" placeholder="Search the creative world at work" />
      </div>
    </div>
  );
}

export default SearchArea;

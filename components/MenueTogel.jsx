
"use client"

import Hamburger from "hamburger-react"

function MenueTogel() {
  return (
    <div className="z-10 hidden max-md:block"><Hamburger onToggle={(e)=>{
        let root = document.documentElement;
        root.style.setProperty('--nav-pos', (e)?"0":"-270px");
    }} size={20} /></div>
  )
}

export default MenueTogel
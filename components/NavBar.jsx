import Bell from "@/SVG/Bell"


function NavBar() {
  return (
    <div className="flex justify-between px-3 items-center border">
        <div className=" flex items-baseline gap-3 font-semibold text-md">
            <div className="text-xl font-bold">Behance</div>
            <NavItem>For You</NavItem>
            <NavItem>Discover</NavItem>
            <NavItem>Hire</NavItem>
            <NavItem>Assets</NavItem>
            <NavItem>Jobs</NavItem>
            </div>
        <div className="flex gap-1 mx-3 items-center">
            <div className="mx-3"><Bell className="w-5 h-5 hover:fill-slate-500 cursor-pointer"/></div>
            <div><button className="px-4 border transition-all border-[#dee8ff] text-[#0057ff] text-[14px] font-semibold py-1 hover:border-[#b7cdff] hover:bg-[#dee8ff] rounded-full  bg-[#f5f8ff]">Log In</button></div>
            <div><button className="px-4 border transition-all  border-transparent bg-[#0057ff] text-[14px] font-semibold py-1 hover:bg-[#003ecb] rounded-full  text-[#f5f8ff]">Sign Up</button></div>
        </div>
    </div>
  )
}

function NavItem(props){
    return (
        <div className="py-4 border-b-2 transition-all border-transparent  hover:border-black hover:cursor-pointer">{props.children}</div>
    )
}

export default NavBar
import MenueTogel from "./MenueTogel";
import { Notification } from "./Notification";

function NavBar() {
  return (
    <div className="flex bg-white shadow-md justify-between px-2 items-center z-20 fixed top-0 left-0 w-screen">
      <div className=" flex items-center gap-3 font-semibold text-md">
        <MenueTogel />
        <div className="text-xl font-bold">Behance</div>
        <div className="flex gap-3 max-md:px-3 max-md:pt-3 max-md:flex-col max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen max-md:w-[270px] max-md:shadow-lg transition-transform max-md:translate-x-[var(--nav-pos)] bg-white">
          <div className="max-md:block hidden self-end">
            <button className="px-4 border transition-all border-[#dee8ff] text-[#0057ff] text-[14px] font-semibold py-1 hover:border-[#b7cdff] hover:bg-[#dee8ff] rounded-full  bg-[#f5f8ff]">
              Log In
            </button>
          </div>
          <NavItem>For You</NavItem>
          <NavItem>Discover</NavItem>
          <NavItem>Hire</NavItem>
          <NavItem>Assets</NavItem>
          <NavItem>Jobs</NavItem>
          <div className="max-md:block hidden self-center">
            <button className="px-4 border transition-all  border-transparent bg-[#0057ff] text-[14px] font-semibold py-1 hover:bg-[#003ecb] rounded-full  text-[#f5f8ff]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-1 mx-3 items-center">
        <div className="mx-3">
          <Notification />
        </div>
        <div className=" max-md:hidden">
          <button className="px-4 border transition-all border-[#dee8ff] text-[#0057ff] text-[14px] font-semibold py-1 hover:border-[#b7cdff] hover:bg-[#dee8ff] rounded-full  bg-[#f5f8ff]">
            Log In
          </button>
        </div>
        <div className=" max-md:hidden">
          <button className="px-4 border transition-all  border-transparent bg-[#0057ff] text-[14px] font-semibold py-1 hover:bg-[#003ecb] rounded-full  text-[#f5f8ff]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

function NavItem(props) {
  return (
    <div className="py-4 border-b-2 transition-all border-transparent  md:hover:border-black hover:cursor-pointer">
      {props.children}
    </div>
  );
}

export default NavBar;

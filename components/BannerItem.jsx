
function BannerItem(props) {
    const Icon = props.icon;
  return (
    <div className="flex backdrop-blur-[30px] hover:backdrop-blur-[100px] hover:bg-gray-300/10 select-none cur gap-5 p-6 bg-[rgba(255,255,255,.15)] rounded-2xl w-full">
        <div className="m-auto"><Icon className="w-7 h-7 fill-white" /></div>
        <div className=" text-justify text-white">{props.children}</div>
    </div>
  )
}

export default BannerItem
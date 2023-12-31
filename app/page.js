import NavBar from "@/components/NavBar";
import bgimg from "../image/search-banner-image.jpeg";
import BannerItem from "@/components/BannerItem";
import Share from "@/SVG/Share";
import Sell from "@/SVG/Sell";
import Job from "@/SVG/Job";
import SearchArea from "@/components/SearchArea";
import CardArea from "@/components/CardArea";

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      <NavBar />
      <div className="flex banner relative flex-col w-full max-md:hidden">
        <div
          style={{
            backgroundImage: `url(${bgimg.src})`,
            backgroundPosition: "50% 0%",
            backgroundSize: "cover",
          }}
          className=' pb-9 pt-28 after:content-[""] z-[1] after:bg-[rgba(0,0,0,.45)] after:z-[-1] after:w-full after:h-full after:absolute after:top-0'
        >
          <h1 className="z-[2] text-clamp text-center text-white font-bold">
            Showcase Your Work & Get Paid
          </h1>
          <h1 className="z-[2] text-center text-lg text-[22px] mb-9 text-white ">
            Join Behance, the world's largest creative network
          </h1>
          <div className="z-[2] flex justify-center gap-7 w-fit mx-auto lg:w-4/5 max-lg:mx-4">
            <BannerItem icon={Share}>
              Share your work and get discovered by millions of creatives and
              clients
            </BannerItem>
            <BannerItem icon={Sell}>
              Sell design assets and make money creating what you love
            </BannerItem>
            <BannerItem icon={Job}>
              Find your next full time or freelance opportunity
            </BannerItem>
          </div>
        </div>
      </div>
      <SearchArea />
      <CardArea />
    </main>
  );
}

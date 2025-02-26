import Youtube_logo from "../../assets/images/Youtube.png";
import Tiktok_logo from "../../assets/images/Tiktok.png";
import Snapchat_logo from "../../assets/images/Snapchat.png";
import Instagram_logo from "../../assets/images/Instagram.png";
import Facebook_logo from "../../assets/images/Facebook.png";
import Img from "../common/image/Img";

const Hero = () => {
  return (
    <div className="w-full mt-9 flex flex-row items-center justify-center gap-16 px-[83px] mb-10">
      <div className="w-full flex flex-col justify-end items-start ml-[45px]">
        <div className="text-[40px] font-bold text-[#5962FE]">Double B</div>
        <div className="text-4xl font-bold text-[#3A3A3A]">
          Boost your brand with creators
        </div>
        <div className="w-[639px] mt-8 h-full text-2xl font-bold">
          Whether you’re a creator looking for your next brand deal, or a
          marketer hiring creators for your next campaign, you'll find them on
          #Double B.
        </div>
        <div className="flex flex-row gap-8 mt-8">
          <div className="w-[200px] h-[48px] text-sm font-bold flex-nowrap px-2 py-[15px] border-solid border-2 border-[#5962FE] bg-[#5962FE] hover:text-[#5962FE] hover:bg-transparent text-white duration-200 cursor-pointer rounded-[8px] flex items-center justify-center drop-shadow-lg">
            Get started
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center justify-center w-10 h-10 hover:-translate-y-1 duration-200 cursor-pointer">
              <Img
                src={Instagram_logo?.src}
                alt="social-media-logos"
                className=" rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 hover:-translate-y-1 duration-200 cursor-pointer">
              <Img
                src={Youtube_logo?.src}
                alt="social-media-logos"
                className=" rounded"
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 hover:-translate-y-1 duration-200 cursor-pointer">
              <Img
                src={Tiktok_logo?.src}
                alt="social-media-logos"
                className=" rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 hover:-translate-y-1 duration-200 cursor-pointer">
              <Img
                src={Snapchat_logo?.src}
                alt="social-media-logos"
                className=" rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 hover:-translate-y-1 duration-200 cursor-pointer">
              <Img
                src={Facebook_logo?.src}
                alt="social-media-logos"
                className=" rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;

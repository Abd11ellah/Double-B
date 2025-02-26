import Img from "../../common/image/Img";
import logo from "../../../assets/images/Frame 1.png";
import TABS from "../../../utils/TABS";
import Tabs from "./Tabs";

function Navbar() {
  console.log(TABS);
  return (
    <>
      <div className=" h-[60px] px-4 min-h-[60px]"></div>
      <div className="flex items-center h-[60px] w-full px-4 bg-mainColor  fixed z-10 top-0 gap-4 right-0">
        {/* logo */}
        <div className=" w-[36px] h-[36px] rounded-sm overflow-hidden">
          <Img
            src={logo?.src}
            alt={"logo_DoubleB"}
            title={"logo_DoubleB"}
            className="h-full w-full object-contain block"
          />
        </div>
        {/* navbar tabs */}
        <nav className={"flex-1 h-full flex  items-center  justify-center"}>
          {TABS?.map((item, index) => {
            return <Tabs key={index} item={item} />;
          })}
        </nav>
      </div>
    </>
  );
}

export default Navbar;

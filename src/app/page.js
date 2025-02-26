import Examples from "@/components/main/Examples";
import Hero from "@/components/main/Hero";
import HowItWorks from "@/components/main/HowItWorks";
import Testimonials from "@/components/main/Testimonials";
import TypeOfUSG from "@/components/main/TypeOfUSG";
import WhatIsUSG from "@/components/main/WhatIsUSG";
import WhereItWorks from "@/components/main/WhereItWorks";
import WhyChooseUs from "@/components/main/WhyChooseUs";

export default function Home() {
  return (
   <div>

      <Hero/>
      <Examples/>
      <HowItWorks/>
      <WhereItWorks/>
      {/* <WhatIsUSG/> */}
      <TypeOfUSG/>
      <WhyChooseUs/>
      <Testimonials/>

   </div>
  );
}

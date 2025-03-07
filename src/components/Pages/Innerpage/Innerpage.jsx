import Navbar from "../../Navbar";
import AIsection from "./AIsection";
import CaseStudy from "./CaseStudy";
import Contact1 from "./Contact1";
import DrivingValues from "./DrivingValues";
import Services from "./Services";
import Whypiepeople from "./Whypiepeople";

export default function Innerpage() {
  return (
    <div className="w-full h-auto text-white">
      <div
        className="relative w-full min-h-[500px] md:h-screen bg-center bg-cover flex flex-col justify-center"
        style={{
          backgroundImage: `url('${
            import.meta.env.BASE_URL
          }/Bgphotos/innerpage/innerpage1.png')`,
        }}
      >
        <Navbar />
        <div className="flex flex-col items-start justify-center h-full px-6 text-center md:px-20 md:text-left">
          <h1 className="mt-10 text-3xl font-bold md:mt-20 md:text-6xl">
            AI and Machine Learning
          </h1>
        </div>
      </div>

      <div className="text-black bg-white">
        <AIsection />
        <Services />
        <CaseStudy />
        <Whypiepeople />
        <DrivingValues />
        <Contact1 />
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";

export default function Home() {
  const images = [
    `${import.meta.env.BASE_URL}/Bgphotos/home/robot.png`,
    `${import.meta.env.BASE_URL}/Bgphotos/home/robot1.png`,
    `${import.meta.env.BASE_URL}/Bgphotos/home/robot2.png`,
    `${import.meta.env.BASE_URL}/Bgphotos/home/robot3.png`,
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Navbar />

      <div
        className="flex flex-col items-center justify-center w-full h-full text-center text-white transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="font-semibold text-7xl">Meet your AI goals</h2>
        <h2 className="font-semibold text-7xl">
          with Piepeople’s Smart Platform
        </h2>
        <button
          className="p-5 mt-4 text-2xl text-white bg-red-600 rounded-lg hover:bg-red-700"
          onClick={() => navigate("/Innerpage")}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

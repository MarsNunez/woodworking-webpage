import Navbar from "./Navbar";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-950">
      <Navbar />
      <div className="pl-10 pt-12 relative pr-4">
        <img src="/img/vader.webp" alt="vader image" className="w-64 ml-auto" />

        <div className="absolute top-48">
          <p className="title text-[#efa570] tracking-wider">Carving Art</p>
          <h1 className="title text-5xl max-w-xs mt-2 mb-3">
            Bringing Wood to Life
          </h1>
          <div className="max-w-[170px] w-fit">
            <p className="text-white/80 text-sm font-medium leading-5">
              Expertly carved wooden sculptures and figurines that showcase the
              natural bauty and versatility of wood
            </p>
          </div>
        </div>

        <div className="text-black bg-[#efa570] w-fit ml-auto mr-7 text-4xl px-3 py-3 rounded-full mt-24">
          <FiArrowDown className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

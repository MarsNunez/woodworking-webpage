import { FiArrowRight } from "react-icons/fi";
const About = () => {
  return (
    <section className="min-h-screen px-10 pt-14 pb-5">
      <img src="/img/man.webp" alt="man image" className="w-60 mx-auto" />
      <div>
        <h2 className="title text-5xl mb-7">Wood is my Passion</h2>
        <p className="text-white/70 text-sm font-medium leading-5">
          Hi, I'm Jack, a wood carving artist with 20 years of experience in
          creating unique, handcrafted wooden masterpieces that tell a story. My
          skills in carving, desing, and finishing have been honed over the
          years, allowing me to create stuning scultures, figurines, forniture,
          and decorations.
        </p>
      </div>
      <div className="flex items-center h-[68px] w-fit relative group text-white/80 mt-8">
        <p className="uppercase font-semibold text-sm tracking-wider group-hover:text-[#efa570] duration-200">
          View my Work
        </p>
        <div className="border-[0.2px] border-[#efa570]/30 px-6 py-6 w-fit rounded-full relative -left-4">
          <FiArrowRight className="text-4xl text-[#efa570] group-hover:rotate-90 duration-300" />
        </div>
      </div>
    </section>
  );
};

export default About;

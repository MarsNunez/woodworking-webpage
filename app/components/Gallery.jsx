"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// https://www.npmjs.com/package/react-multi-carousel

const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5,
  // },
  // desktop: {
  //   breakpoint: { max: 3000, min: 1024 },
  //   items: 3,
  // },
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 2,
  // },
  // mobile: {
  //   breakpoint: { max: 464, min: 0 },
  //   items: 1,
  // },

  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Gallery = () => {
  return (
    <section className="pb-10 pt-36">
      <Carousel responsive={responsive} infinite showDots arrows={false}>
        <div className="border mx-4 border-[#20130a] flex flex-col justify-center h-[460px] select-none text-center rounded-xl bg-gradient-to-b from-[#efa570]/40 via-transparent to-transparent">
          <img
            src="/img/yoda.webp"
            alt="gallery-img"
            className="w-[230px] pointer-events-none mx-auto"
          />
          <h3 className="title text-4xl mt-4 mb-2 tracking-tight">Figurines</h3>
          <p className="text-[#efa570] uppercase text-sm font-semibold ">
            View Gallery
          </p>
          {/* </div> */}
        </div>
        <div className="border mx-4 border-[#20130a] h-[460px] select-none text-center rounded-xl flex flex-col justify-center bg-gradient-to-b from-[#efa570]/40 via-transparent to-transparent">
          <img
            src="/img/decor.webp"
            alt="gallery-img"
            className="w-[160px] pointer-events-none mx-auto"
          />
          <h3 className="title text-4xl mt-4 mb-2 tracking-tight">
            Decorations
          </h3>
          <p className="text-[#efa570] uppercase text-sm font-semibold ">
            View Gallery
          </p>
        </div>
        <div className="border mx-4 border-[#20130a] h-[460px] select-none text-center rounded-xl flex flex-col justify-center px-5 bg-gradient-to-b from-[#efa570]/40 via-transparent to-transparent">
          <img
            src="/img/relief.webp"
            alt="gallery-img"
            className="w-full pointer-events-none mx-auto"
          />
          <h3 className="title text-4xl mt-8 mb-2 tracking-tight">Relief</h3>
          <p className="text-[#efa570] uppercase text-sm font-semibold ">
            View Gallery
          </p>
        </div>
        <div className="border mx-4 border-[#20130a] h-[460px] select-none text-center rounded-xl flex flex-col justify-center bg-gradient-to-b from-[#efa570]/40 via-transparent to-transparent">
          <img
            src="/img/archi.webp"
            alt="gallery-img"
            className="w-[90px] pointer-events-none mx-auto"
          />
          <h3 className="title text-4xl mt-8 mb-2 tracking-tight">
            Architectural
          </h3>
          <p className="text-[#efa570] uppercase text-sm font-semibold ">
            View Gallery
          </p>
        </div>
        <div className="border mx-4 border-[#20130a] h-[460px] select-none text-center rounded-xl flex flex-col justify-center bg-gradient-to-b from-[#efa570]/40 via-transparent to-transparent">
          <img
            src="/img/table.webp"
            alt="gallery-img"
            className="w-[230px] pointer-events-none mx-auto"
          />
          <h3 className="title text-4xl mt-8 mb-2 tracking-tight">Furniture</h3>
          <p className="text-[#efa570] uppercase text-sm font-semibold ">
            View Gallery
          </p>
        </div>
      </Carousel>
    </section>
  );
};

export default Gallery;

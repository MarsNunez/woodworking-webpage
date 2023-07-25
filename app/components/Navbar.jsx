const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5">
      <img src="/img/logo1.webp" alt="logo" className="h-11 ml-10" />
      <div className="flex items-center h-[68px] w-[157px] relative group text-white/80">
        <p className="uppercase font-semibold">Say hello</p>
        <div className="border-[0.2px] border-white/80 px-8 py-8 w-fit rounded-full relative -left-9 group-hover:px-0 group-hover:py-0 duration-500"></div>
      </div>
    </nav>
  );
};

export default Navbar;

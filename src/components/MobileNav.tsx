const MobileNav = () => {
  return (
    <nav className="sticky z-30 top-0  justify-between items-center p-6 bg-opacity-100 backdrop-blur-md transition duration-500 flex flex-col sm:hidden">
      <ul className=" space-y-8 text-black text-xl flex flex-col items-center justify-center mt-[40%]">
        <li className="hover:text-secondary ">
          <a href="#introduction">Introduction</a>
        </li>
        <li className="hover:text-secondary ">
          <a href="#founder">Founder</a>
        </li>
        <li className="hover:text-secondary">
          <a href="#program-highlights">Program Highlights</a>
        </li>
        <li className="hover:text-secondary">
          <a href="#success-stories">Success Stories</a>
        </li>
      </ul>
    </nav>
  );
};
export default MobileNav;

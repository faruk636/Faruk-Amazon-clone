import { GiHamburgerMenu } from "react-icons/gi";

const LowerHeader = () => {
  return (
    <nav className="bg-[#232F3E] text-white font-medium ">
      <ul className="flex gap-[15px] list-none text-sm items-center p-[8px]">
        <li className="flex items-center gap-0.5 text-lg text-bold cursor-pointer">
          <GiHamburgerMenu />
          <p>All</p>
        </li>
        <li className="hidden md:block">Today's Deals</li>
        <li className="hidden md:block">Prime Video</li>
        <li className="hidden md:block">Buy Again</li>
        <li className="hidden md:block">Customer Service</li>
        <li className="hidden md:block">Registry</li>
        <li className="hidden md:block">Gift Cards</li>
        <li className="hidden md:block">Sell</li>
      </ul>
    </nav>
  );
};

export default LowerHeader;

import { SlLocationPin } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { useContext } from "react";
import { dataContext } from "../DataProvider/DataProvider";
import {auth} from '../Utils/firebase'

const Header = () => {
  const [{ cart, user }, dispatch] = useContext(dataContext);

  const totalCart = cart.reduce((amount, value) => {
    return value.amount + amount;
  }, 0);

  return (
    <section className="sticky top-0 z-[100]">
      <header className="bg-[#131921] text-white flex items-center justify-center h-auto md:h-[60px]">
        <nav className="w-[98%] flex items-center justify-center">
          <ul className="flex flex-col md:flex-row items-center justify-center w-full list-none gap-[2px]">
            {/* Logo */}
            <li className="max-w-[134px]">
              <NavLink to="/">
                <img
                  className="w-[125px] pt-1 cursor-pointer"
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </NavLink>
            </li>

            {/* Deliver To */}
            <li>
              <NavLink
                to="#"
                className="flex items-center gap-1 p-2 hover:outline-1 hover:outline-white rounded cursor-pointer"
              >
                <SlLocationPin size={18} />
                <div className="leading-tight">
                  <p className="text-[12px] opacity-80">Deliver to</p>
                  <span className="font-bold">Ethiopia</span>
                </div>
              </NavLink>
            </li>

            {/* Search Bar */}
            <li className="flex flex-1 items-center">
              <div className="flex flex-1 rounded-md overflow-hidden focus-within:border-2 focus-within:border-[#f3a847]">
                {/* Category Select */}
                <select className="bg-gray-100 text-black text-sm px-2 border-r border-gray-300 cursor-pointer hover:bg-gray-200">
                  <option value="All">All</option>
                </select>

                {/* Input */}
                <input
                  type="text"
                  placeholder="Search Amazon"
                  className="flex-1 p-2 text-black bg-white focus:outline-none"
                />

                {/* Search Button */}
                <button className="bg-[#febd69] px-4 flex items-center justify-center hover:bg-[#f3a847]">
                  <IoIosSearch size={22} color="black" />
                </button>
              </div>
            </li>

            <ul className="flex gap-0.5 items-center justify-center">
              {/* Language */}
              <li className="hidden md:flex items-center gap-1 cursor-pointer hover:outline-1 hover:outline-white rounded p-1">
                <img
                  className="w-[24px] h-[18px]"
                  src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                  alt="usa flag"
                />
                <select className="bg-transparent text-sm font-bold">
                  <option value="EN">EN</option>
                </select>
              </li>

              {/* Account & Lists */}
              <li className="cursor-pointer hover:outline-1 hover:outline-white rounded p-2 text-left">
                <Link to={!user && "/auth"}>
                  {user ? (
                    <>
                      <p className="text-[12px]">
                        Hello, {user?.email?.split("@")[0]}
                      </p>
                      <span
                        className="bg-transparent font-bold"
                        onClick={() => {
                          auth.signOut();
                        }}
                      >
                        Sign Out
                      </span>
                    </>
                  ) : (
                    <>
                      <p className="text-[12px]">Hello, Sign in</p>
                      <select className="bg-transparent font-bold">
                        <option value="Account & Lists">Account & Lists</option>
                      </select>
                    </>
                  )}
                </Link>
              </li>

              {/* Returns & Orders */}
              <li className="cursor-pointer hover:outline-1 hover:outline-white rounded p-2">
                <NavLink to="/orders">
                  <p className="text-[12px]">Returns</p>
                  <span className="font-bold">& Orders</span>
                </NavLink>
              </li>

              {/* Cart */}
              <li className="cursor-pointer hover:outline-1 hover:outline-white rounded p-2 flex items-center">
                <NavLink to="/cart">
                  <div className="relative flex items-center">
                    <BiCart size={28} />
                    <span className="absolute -top-1.5 left-2  text-[#f08804] font-bold text-sm px-1 rounded-full">
                      {totalCart}
                    </span>
                  </div>
                  <p className="font-bold ml-1">Cart</p>
                </NavLink>
              </li>
            </ul>
          </ul>
        </nav>
      </header>
      <LowerHeader />
    </section>
  );
};

export default Header;

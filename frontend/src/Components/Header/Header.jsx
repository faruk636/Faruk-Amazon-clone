// import { SlLocationPin } from "react-icons/sl";
// import { IoIosSearch } from "react-icons/io";
// import { BiCart } from "react-icons/bi";
// import { Link, NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <section className="">
//       <section>
//         <div>
//           <Link to="/">
//             <img
//               src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//               alt="amazon logo"
//             />
//           </Link>
//           <div>
//             <span>
//               <SlLocationPin />
//             </span>
//             <div>
//               <p>Deliver to</p>
//               <span>Ethiopia</span>
//             </div>
//           </div>
//         </div>
//         <div>
//           {/* Search */}
//           <select name="" id="">
//             <option value="All">ALL</option>
//           </select>
//           <input type="text" placeholder="Search Amazon" />
//           <IoIosSearch />
//         </div>
//         <div>
//           <div>
//             <img
//               src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
//               alt="usa"
//             />
//             <select name="" id="">
//               <option value="ENG">ENG</option>
//             </select>
//           </div>
//           <Link to=''>
//             <p>Hello, Faruk</p>
//             <select name="" id="">
//               <option value="Account & Lists">Account & Lists</option>
//             </select>
//           </Link>
//           <Link to=''>
//             <p>Returns</p>
//             <span>& Orders</span>
//           </Link>
//           <Link to=''>
//             <div>
//               <BiCart />
//               <span>0</span>
//             </div>
//             <p>Cart</p>
//           </Link>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Header;

// const Header = () => {
//   return (
//     <header className="bg-[#131921] text-white flex items-center justify-center h-[60px]">
//       <nav className="w-[95%]">
//         <ul className="flex items-center gap-[8px]">
//           <li className="max-w-[134px]">
//             <NavLink to="/">
//               <img
//                 className="w-[80%] pt-[5px] align-middle"
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt=""
//               />
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="#"
//               className="flex items-center justify-center gap-[3px] font-bold p-[5px]"
//             >
//               <SlLocationPin />
//               <p className="flex flex-col leading-3.5">
//                 <span className="text-[12px] opacity-75 font-medium">
//                   Deliver to{" "}
//                 </span>
//                 Ethiopia
//               </p>
//             </NavLink>
//           </li>
//           <li className="flex items-start justify-center flex-1 rounded-b-xl overflow-hidden w-[100%] ">
//             <select name="" id="" className="p-[10px] font-bold">
//               <option value="All">All</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Search Amazon"
//               className="flex-1 p-2.5 font-bold border-none outline-none bg-white text-black"
//             />
//             <IoIosSearch />
//           </li>

//           <li>
//             <NavLink to="#">
//               <img
//                 className="w-[2vw]"
//                 src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
//                 alt="usa"
//               />
//               <select name="" id="">
//                 <option value="EN">EN</option>
//               </select>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink>
//               <p>Hello, Faruk</p>
//               <select name="" id="">
//                 <option value="Account & Lists">Account & Lists</option>
//               </select>
//             </NavLink>
//           </li>
//           <li>
//             <Link to="">
//               <p>
//                 Returns <span>& Orders</span>
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link>
//               <div>
//                 <BiCart />
//                 <span>0</span>
//               </div>
//               <p>Cart</p>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import { SlLocationPin } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
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
              <li className="cursor-pointer hover:outline-1 hover:outline-white rounded p-2">
                <p className="text-[12px]">Hello, Faruk</p>
                <select className="bg-transparent font-bold">
                  <option value="Account & Lists">Account & Lists</option>
                </select>
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
                <NavLink to='/cart'>
                   <div className="relative flex items-center">
                  <BiCart size={28} />
                  <span className="absolute -top-1.5 left-2  text-[#f08804] font-bold text-sm px-1 rounded-full">
                    0
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
    </>
  );
};

export default Header;

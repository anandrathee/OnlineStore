import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import { ProductContext } from "../Context/Context";
import { IoIosCloseCircle } from "react-icons/io";
import CartItemCard from "./CartItemCard";


const NavBar = () => {
  const { searchQuery, setSearchQuery, addedProducts } =
    useContext(ProductContext);

  return (
    <>
      <div>
        <div className="w-full h-14 flex items-center justify-between px-20">
          <h1 className="text-3xl font-semibold">OneStore.</h1>

          <div className="nav flex gap-10">
            {["home", "about", "contact"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLocaleLowerCase() === "home" ? "" : item}`}
                className="font-semibold uppercase"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="searchLogin flex items-center justify-center gap-10">
            <div className="search flex w-40  border-b items-center justify-center gap-2 h-10 ">
              <FiSearch className="text-xl text-zinc-500" />
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                className=" w-full h-full outline-none bg-transparent"
                type="search"
                placeholder="Search..."
              />
            </div>

            <div className="auth h-full flex gap-6 items-center justify-center text-lg font-medium">
              <Link to="/login">Login</Link>

              <Link
                to="/cart"
                className="cart flex items-center justify-center gap-2 rounded-full bg-amber-600 w-18 h-10 text-white"
              >
                <GiShoppingBag />

                <p className="">{addedProducts.length}</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Cart Overlay */}
        {/* {addedProducts.length > 0 ():()} */}

        <div className="cart w-full h-full fixed overflow-y-auto top-0 overflow-hidden flex">
          <div className="cartContainer w-[75%] h-full bg-zinc-900 opacity-50 "></div>
          <div className="cartContainer w-[25%] h-full bg-zinc-300 flex flex-col items-center justify-start">
            <div className="top w-full h-16 px-2 flex items-center justify-between bg-zinc-100">
              <h1 className="font-semibold">My Cart</h1>
              <IoIosCloseCircle className="text-2xl" />

            </div>
            <div className="center w-full h-auto p-2 rounded-md">
              <div className="cartItems w-full h-auto bg-zinc-100 flex flex-col  gap-4 overflow-y-auto p-2">
                {/* Cart items will be displayed here */}
                <CartItemCard/>
                <CartItemCard/>
                <CartItemCard/>
                <CartItemCard/>
              
              </div>
            </div>
            <div className="bottom w-full h-auto bg-zinc-100">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import { ProductContext } from "../Context/Context";
import { IoIosCloseCircle } from "react-icons/io";
import CartItemCard from "./CartItemCard";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";




const NavBar = () => {
  const { searchQuery, setSearchQuery, addedProducts } =
    useContext(ProductContext);

   const [isCartOpen, setIsCartOpen] = useState(false);

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

              <div
              onClick={()=>setIsCartOpen(true)}                
                className="cart flex items-center justify-center cursor-pointer gap-2 rounded-full bg-amber-600 w-18 h-10 text-white"
              >
                <GiShoppingBag />

                <p className="">{addedProducts.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Overlay */}
        {/* {addedProducts.length > 0 ():()} */}

           {/* Cart Overlay */}
{isCartOpen && (
  <div className="cart w-full h-full fixed overflow-y-auto top-0 overflow-hidden flex">
    <div
      onClick={() => setIsCartOpen(false)}
      className="cartContainer w-[75%] h-full bg-zinc-900 opacity-50"
    ></div>

    {/* Right side panel */}
    <div className="cartContainer w-[25%] h-full bg-zinc-300 flex flex-col items-center justify-start">
      <div className="top w-full h-16 px-2 flex items-center justify-between bg-zinc-100">
        <h1 className="font-semibold">My Cart</h1>
        <IoIosCloseCircle
          onClick={() => setIsCartOpen(false)}
          className="text-2xl cursor-pointer"
        />
      </div>

      {/* Conditional content based on addedProducts */}
      {addedProducts.length === 0 ? (
        <div className="center w-full h-full p-4 flex flex-col items-center justify-center">
          <p className="text-center text-lg text-zinc-600">Your cart is empty.</p>
          <MdOutlineRemoveShoppingCart className="text-3xl text-zinc-600 mt-5" />
          <button onClick={()=>setIsCartOpen(false)} className="flex items-center justify-center bg-orange-600 text-white rounded-md px-3 text-lg py-2 mt-5 gap-2 cursor-pointer">Continue Shopping <RiShoppingBag4Line />
</button>

        </div>
      ) : (
        <>
          <div className="center w-full h-auto p-2 rounded-md">
            <div className="cartItems w-full h-auto bg-zinc-100 flex flex-col gap-4 overflow-y-auto p-2">
              {/* Map actual cart items instead of hard-coding */}
              {addedProducts.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="bottom w-full h-auto bg-zinc-100">
            {/* Totals / buttons */}
          </div>
        </>
      )}
    </div>
  </div>
)}

        
      </div>
    </>
  );
};

export default NavBar;

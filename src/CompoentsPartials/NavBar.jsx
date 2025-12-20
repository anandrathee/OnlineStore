import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";


const NavBar = () => {
  return (
    <div className="w-full h-14 flex items-center justify-between px-20">
      <h1 className="text-3xl font-semibold">OneStore.</h1>

<div className="nav flex gap-10">
      {
        ['home', 'about', 'contact'].map((item, index) => (
  <Link
    key={index}
    to={`/${item.toLocaleLowerCase() === 'home' ? '' : item}`}
    className="font-semibold uppercase"
  >
    {item}
  </Link>
))
      }
      </div>

      <div className="searchLogin flex items-center justify-center gap-10">
       <div className="search flex w-40  border-b items-center justify-center gap-2 h-10 ">
         <FiSearch className="text-xl text-zinc-500" />
        <input
          className=" w-full h-full outline-none bg-transparent"
          type="search"
          placeholder="Search..."
        />
       </div>

        <div className="auth h-full flex gap-6 items-center justify-center text-lg font-medium">
        <Link to="/login">Login</Link>

        <Link to="/cart" className="cart flex items-center justify-center gap-2 rounded-full bg-amber-600 w-18 h-10 text-white">
          
        <GiShoppingBag />

        <p>0</p>
       
        </Link>
      </div>
      </div>

      
    </div>
  );
};

export default NavBar;

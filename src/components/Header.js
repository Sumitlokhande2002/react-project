import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus=useOnlineStatus();
  
  let[btnName,setBtnName]=useState("login");
  const cartItems=useSelector((store=>store.cart.items))
  
  
    return (
      <div className="flex justify-between bg-green-200 shadow-lg mb-3">
        <div className="w-[9rem]">
          <img
            alt="logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2/"
          />
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4">         
            <li className="px-4"id="online" >Online Status: <span style={{ color: onlineStatus === false ? "red" : "green" }}className={onlineStatus==false?"offline":"online"}>{onlineStatus==false?"Offline":"Online"}</span></li>  
            <li className="px-4 hover:text-purple-700"><Link to="/">Home</Link></li>

                      {/* <li><Link to="/grocerys">Grocerys</Link></li> */}
            <li className="px-4  hover:text-purple-700"><Link to="/cart"> Cart({cartItems.length} items</Link>)</li>
            <button className="btn  hover:text-purple-700 px-4 bg-white rounded-md " onClick={()=>{btnName=="login"?setBtnName("logout"):setBtnName("login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
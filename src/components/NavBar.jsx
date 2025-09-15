import React from 'react';
import { FaCartArrowDown, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { logOutUser } from '../redux/AppSlice';
import { getAuth, signOut } from "firebase/auth";


const NavBar = () => {

const products  = useSelector((state) => state.Shop.products)
const user  = useSelector((state) => state.Shop.UserInfo)

const dispatch = useDispatch()

const handleLogOut = () => {
  Swal.fire({
    title: "Do you want to log out?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, log out",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
  }).then((result) => {
    if (result.isConfirmed) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          dispatch(logOutUser());
          Swal.fire("Logged out successfully", "", "success");
        })
        .catch((error) => {
          Swal.fire("An error occurred during logout", error);
        });
    }
  });
};


  return (
    <div className="fixed w-full bg-[#131921] text-white shadow-md mb-4  z-50 ">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">

        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-yellow-400 transition duration-700"
          >
            E-Shop
          </Link>

          <div className="hidden lg:flex items-center gap-2 text-sm cursor-pointer hover:text-yellow-400 transition duration-700">
            <FaMapMarkerAlt className="text-[25px]" />
            <span>
              Deliver to<br />
              <strong className="font-medium">Egypt</strong>
            </span>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 max-w-3xl transition duration-700">
          <select className="bg-gray-200 text-black px-2 py-2 text-sm rounded-l-md outline-none">
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 text-black outline-none"
          />

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md transition duration-700">
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center gap-6 text-sm">
  {user ? (
    <div className="flex items-center gap-3">
      <span className='text-bold font-semibold items-center'>Hello , <br /> {user.userName}</span>
      <button 
        onClick={handleLogOut} 
        className="hover:text-yellow-400 transition duration-700"
        title="Log out"
      >
        <LuLogOut className=' items-center text-2xl' />
      </button>
    </div>
  ) : (
    <Link
      to="/sign"
      className="hover:text-yellow-400 transition duration-700 text-center"
    >
      Hello, sign in<br />
      <strong>Account & Lists</strong>
    </Link>
  )}
</div>


    <div className="">
                <Link
            to="/"
            className="hidden lg:flex flex-col hover:text-yellow-400 transition duration-700 text-center"
          >
            Returns<br />
            <strong>& Orders</strong>
          </Link>
    </div>
        <Link
          to="/card"
          className="relative flex hover:text-yellow-400 text-center transition duration-700 gap-2"
        >
          <strong>Card</strong>
          <FaCartArrowDown size={24} className="mx-auto"  />
          <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full px-1">
            { products.length > 0 ? products.length : 0 }
          </span>
          
        </Link>
        
      </nav>

      <div className="sm:flex lg:hidden mt-4">
                <div className="flex flex-1 max-w-3xl mt-4 sm:mt-0 sm:ml-4">
          <select className="bg-gray-200 text-black px-2 py-2 text-sm rounded-l-md outline-none">
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 text-black outline-none"
          />

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md transition duration-700">
            <FaSearch />
          </button>
        </div>
        <Link
          to="/"
          className="flex flex-col hover:text-yellow-400 transition duration-700 text-center text-white mt-2"
        >
          Returns<br />
          <strong>& Orders</strong>
        </Link>


      </div>
    </div>
  );
};

export default NavBar;

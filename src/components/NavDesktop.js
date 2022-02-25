import React from 'react';
import logo from '../assets/images/logo.jpg';

import {
    FaPhoneAlt,
    FaRegHeart,
    FaRegUserCircle,
    FaSearch,
    FaShoppingBag
} from 'react-icons/fa';

function NavDesktop(props) {
    return (
        <div className="lg:col-span-2 lg:block hidden h-screen relative bg-white" >
            <div className="fixed top-0 left-0">
                <div className="my-12 mx-14">
                    <img src={logo} alt="logo" className="h-[110px] w-[180px]" />
                </div>
                <ul className="flex justify-around mx-16 mt-20">
                    <li>
                        <a href="/" className="icon hover:text-sky-300"><FaRegUserCircle /></a>
                    </li>
                    <li>
                        <button className="icon hover:text-sky-300"><FaSearch /></button>
                    </li>
                    <li>
                        <a href="/" className="icon hover:text-sky-300"><FaRegHeart /></a>
                    </li>
                    <li>
                        <a href="/" className="icon hover:text-sky-300"><FaShoppingBag /></a>
                    </li>
                </ul>
                <div className="mt-10">
                    <ul className="overflow-auto h-[330px]">
                        <li>
                            <a href="/" className="nav-link hover:nav-link-hover">new arrivals</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link hover:nav-link-hover">đồ nam</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link hover:nav-link-hover">đồ nữ</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link hover:nav-link-hover">đồ đôi</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link hover:nav-link-hover">áo khoác</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link hover:nav-link-hover">phụ kiện</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link hover:nav-link-hover">Săn sale</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link hover:nav-link-hover">Tết sale hết</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link hover:nav-link-hover">chính sách</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link hover:nav-link-hover">toto fanzone</a>
                        </li>
                    </ul>
                </div>
                <div className="bg-black flex justify-around text-base text-gray-100 p-2 mx-16 my-6">
                    <FaPhoneAlt className="mt-1" />
                    <a href="/" className="hover:text-sky-300 hover:underline">0971 834 559</a>
                </div>
            </div>
        </div >
    );
}

export default NavDesktop;
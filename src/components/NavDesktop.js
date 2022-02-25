import React from 'react';
import logo from '../assets/images/logo.jpg';

import {
    FaPhoneAlt,
    FaRegHeart,
    FaRegUserCircle,
    FaSearch,
    FaShoppingBag
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavDesktop(props) {
    return (
        <div className="lg:col-span-2 lg:block hidden h-screen relative bg-white" >
            <div className="fixed top-0 left-0">
                <Link to="/" className="my-12 mx-14 block">
                    <img src={logo} alt="logo" className="h-[110px] w-[180px]" />
                </Link>
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
                            <Link to="/category-page" className="nav-link hover:nav-link-hover">new arrivals</Link>
                        </li>
                        <li>
                            <Link to="/category-page" className="nav-link hover:nav-link-hover">đồ nam</Link>
                        </li>
                        <li>
                            <Link to="/category-page" className="nav-link hover:nav-link-hover">đồ nữ</Link>
                        </li>
                        <li>
                            <Link to="/category-page" className="nav-link hover:nav-link-hover">đồ đôi</Link>
                        </li>
                        <li>
                            <Link to="/category-page" className="nav-link hover:nav-link-hover">áo khoác</Link>
                        </li>
                        <li>
                            <Link to="/category-page" className="nav-link hover:nav-link-hover">phụ kiện</Link>
                        </li>
                        <li>
                            <Link to="/category-page" className="nav-link hover:nav-link-hover">Săn sale</Link>
                        </li>
                        <li>
                            <Link to="/category-page" className="nav-link hover:nav-link-hover">Tết sale hết</Link>
                        </li>
                        <li>
                            <Link to="/category-page" className="nav-link hover:nav-link-hover">chính sách</Link>
                        </li>
                        <li>
                            <Link to="/category-page" className="nav-link hover:nav-link-hover">toto fanzone</Link>
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
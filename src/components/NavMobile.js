import { useState } from 'react'
import logo from '../assets/images/logo.jpg';

import {
    FaListUl,
    FaPhoneAlt,
    FaRegCircle,
    FaRegHeart,
    FaRegUserCircle,
    FaSearch,
    FaShoppingBag
} from 'react-icons/fa';

function NavMobile(props) {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <div className="lg:hidden block ">
            <div className="flex justify-around w-full items-center fixed top-0 left-0 z-50 h-[75px] bg-white">
                <span className="text-2xl" onClick={() => setToggleNav(!toggleNav)}>
                    <FaListUl />
                </span>
                <img src={logo} alt="logo" className="w-[100px] h-[50px]" />
                <span className="text-2xl">
                    <FaShoppingBag />
                </span>
            </div>
            <div className={`fixed lg:hidden block ${toggleNav ? 'translate-x-0' : 'translate-x-[-100%]'} z-50 h-full overflow-y-scroll top-0 left-0 bg-white mt-[75px] transition-nav`}>
                {/* logo */}
                <div className="my-12 mx-14">
                    <img src={logo} alt="logo" className="h-[110px] w-[180px]" />
                </div>
                {/* nav */}
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
                {/* Link */}
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
                <div className="bg-black flex justify-around text-base text-gray-100 p-2 mx-16 my-6 mb-[100px]">
                    <FaPhoneAlt className="mt-1" />
                    <a href="/" className="hover:text-sky-300 hover:underline">0971 834 559</a>
                </div>
            </div>
        </div>
    );
}

export default NavMobile;
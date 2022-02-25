import NavDesktop from "../../components/NavDesktop";
import NavMobile from "../../components/NavMobile";
import Footer from "../../components/Footer";
import SlideTop from "../../components/SlideTop";
import ProductItem from "../../components/ProductItem";
import { FaList } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { MdOutlineViewAgenda } from "react-icons/md";




function TestHtml(props) {
    return (
        <div className="grid grid-cols-10">
            <NavDesktop />
            <NavMobile />

            <div className="lg:col-span-8 col-span-12 lg:pl-10 lg:pr-5 ">
                <SlideTop />
                <div className="px-4">
                    {/* Nav category */}
                    <div className="mt-16 uppercase text-center">
                        <h2 className="text-4xl text-gray-800 font-light">Đồ Nam</h2>
                        <div className="mt-4 border-t border-b border-gray-300 py-3">
                            <ul className="flex justify-center">
                                <li className="after-nav-line text-base hover:nav-link-hover-no-bg font-semibold text-gray-800"><a href="/">Áo thun</a></li>
                                <li className="after-nav-line text-base hover:nav-link-hover-no-bg font-semibold text-gray-800"><a href="/">Áo Sơ Mi Nam</a></li>
                                <li className="after-nav-line text-base hover:nav-link-hover-no-bg font-semibold text-gray-800"><a href="/">quần short</a></li>
                                <li className="text-base hover:nav-link-hover-no-bg font-semibold text-gray-800"><a href="/">quần dài</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* fillter */}
                    <div className="mt-6 border-b border-gray-300 py-4 flex text-lg font-semibold">
                        <div className="flex">
                            <button className="flex items-center text-lg font-normal"><FaList className="mr-2" /> Lọc</button>
                        </div>
                        <div className="ml-auto flex items-center  text-lg font-normal">
                            <p >Xem: </p>
                            <button className="ml-2"><IoGridOutline /></button>
                            <button className="ml-1"><MdOutlineViewAgenda /></button>
                        </div>
                        <div className="ml-4 flex items-center  text-lg font-normal">
                            <p >Sắp xếp theo: </p>
                            <select name="" id="" className="outline-none border border-sky-300 ml-2 px-2 py-1">
                                <option value="">Mặc định</option>
                                <option value="">Giảm dần</option>
                                <option value="">Tăng dần</option>
                                <option value="">Phổ biến nhất</option>
                            </select>
                        </div>
                    </div>
                    {/* product */}
                    <div className="grid grid-cols-12 gap-4 mt-6 ">
                        <div className="col-span-3">
                            <ProductItem />
                        </div>
                        <div className="col-span-3">
                            <ProductItem />
                        </div>
                        <div className="col-span-3">
                            <ProductItem />
                        </div>
                        <div className="col-span-3">
                            <ProductItem />
                        </div>
                        <div className="col-span-3">
                            <ProductItem />
                        </div>
                        <div className="col-span-3">
                            <ProductItem />
                        </div>
                        <div className="col-span-3">
                            <ProductItem />
                        </div>
                        <div className="col-span-3">
                            <ProductItem />
                        </div>
                        <div className="col-span-3">
                            <ProductItem />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

        </div>
    );
}

export default TestHtml;
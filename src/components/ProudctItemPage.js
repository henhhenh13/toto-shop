import img1 from '../assets/images/product-1.jpg';
import img2 from '../assets/images/product-2.jpg';
import img3 from '../assets/images/product-3.jpg';
import img4 from '../assets/images/product-4.jpg';
import img5 from '../assets/images/product-5.jpg';
import mini from '../assets/images/mini-1.jpg';
import { BsCaretDown, BsCaretUp } from 'react-icons/bs';
import { useState } from 'react'


function ProudctItemPage(props) {
    const [value, setValue] = useState(1);
    const hanldeChangeInputValue = (e) => {
        setValue(e.target.value)
    }
    const [toggleTable, setToggleTable] = useState('img');
    console.log(toggleTable);


    return (
        <div>
            {/* san pham */}
            <div className="mt-10">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                        <div className="w-full h-[530px]">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="col-span-8 ml-3 pr-16 text-base text-gray-600">
                        <h3 className="uppercase text-3xl font-normal text-black">ÁO thun W2ATN01204FOSBA</h3>
                        <h4 className="text-2xl text-red-500 font-semibold my-2">225,000₫</h4>
                        <a href="/" className="hover:nav-link-hover hover:bg-transparent">Hướng dẫn chọn size</a>
                        <div>
                            <h4>Màu sắc:</h4>
                            <div className="flex my-2">
                                <div className="w-[75px] h-[75px] mr-3 p-2 cursor-pointer hover:hover-border-red border border-transparent">
                                    <img src={mini} alt="mini" className="w-full h-full object-cover align-middle" />
                                </div>
                                <div className="w-[75px] h-[75px] mr-3 p-2 cursor-pointer hover:hover-border-red border border-transparent">
                                    <img src={mini} alt="mini" className="w-full h-full object-cover align-middle" />
                                </div>
                                <div className="w-[75px] h-[75px] mr-3 p-2 cursor-pointer hover:hover-border-red border border-transparent">
                                    <img src={mini} alt="mini" className="w-full h-full object-cover align-middle" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4>Số lượng:</h4>
                            <div className="flex h-[40px] mt-2">
                                <input
                                    type="number" className="text-center w-[50px] border border-black border-r-0"
                                    value={value}
                                    onChange={hanldeChangeInputValue}
                                />
                                <div className="flex flex-col h-full">
                                    <i className="border border-black flex-1 cursor-pointer">
                                        <BsCaretUp />
                                    </i>
                                    <i className="border border-black flex-1 cursor-pointer">
                                        <BsCaretDown />
                                    </i>
                                </div>

                            </div>
                        </div>
                        <div className="flex mt-4">
                            <button className="flex-1 border-2 border-red-500 text-red-500 border-solid text-base text-center py-2 font-semibold mr-3 uppercase">thêm vao giỏ hàng</button>
                            <button className="flex-1 border-2 border-black border-solid text-base text-center py-2 font-semibold ml-3 uppercase">mua ngay</button>
                        </div>
                        <button className="bg-black text-white text-center text-base py-2 w-full mt-3 uppercase">đang có mặt tại các cửa hàng</button>
                        <div className="text-lg font-semibold text-gray-800 mt-3">
                            <h4 className="mb-3 cursor-default">» BẢO HÀNH SẢN PHẨM 90 NGÀY</h4>
                            <h4 className="mb-3 cursor-default">» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</h4>
                            <h4 className="mb-3 cursor-default">» HOTLINE BÁN HÀNG 1900 633 501</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* table */}
            <div className="mt-14">
                <div className="flex">
                    <button className={toggleTable === 'img' ? 'nav-table-active' : 'nav-table'} onClick={() => setToggleTable('img')}>Mô tả</button>
                    <button className={toggleTable === 'cmt' ? 'nav-table-active' : 'nav-table'} onClick={() => setToggleTable('cmt')}>Đánh giá 0</button>
                    {/* <button className="nav-table">Bình luận</button> */}
                </div>
                {/* danh gia */}
                {
                    toggleTable === 'img'
                        ?
                        <div className="border border-solid px-5 py-3">
                            <img src={img1} alt="img" className="w-full" />
                            <img src={img2} alt="img" className="w-full" />
                            <img src={img3} alt="img" className="w-full" />
                            <img src={img4} alt="img" className="w-full" />
                            <img src={img5} alt="img" className="w-full" />
                        </div>
                        :
                        <div className="border border-solid  grid grid-cols-12 gap-4 py-4 px-4 text-center">
                            <h3 className="col-span-7 text-center text-xl font-semibold text-gray-600">0 ĐÁNH GIÁ CHO ÁO THUN W2ATN01204FOSBA</h3>
                            <div className="border-2 col-span-5 border-solid border-gray-600 py-6">
                                <h3 className="text-xl font-semibold text-gray-600">THÊM ĐÁNH GIÁ</h3>
                                <button className="px-3 mt-2 py-3 text-cyan-500 border-2 border-solid border-cyan-500">Đăng nhập để thêm đánh giá</button>
                            </div>
                        </div>
                }
            </div>

        </div>
    );
}

export default ProudctItemPage;
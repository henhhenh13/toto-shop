import ads1 from '../assets/images/ads_1.jpg';
import news1 from '../assets/images/news_1.jpg';
import { BsArrowRepeat } from 'react-icons/bs'

function News(props) {
    return (
        <div className="mt-10 px-1">
            <div className="grid grid-cols-12 gap-4">
                <div className="lg:col-span-8 col-span-12 flex lg:h-[400px] h-[250px] relative">
                    <img src={ads1} alt="" className="w-full" />
                    <div className="bg-gray-100/70 absolute w-full bottom-0 left-0 py-1">
                        <h4 className="bg-[#3BA1A2] text-white uppercase text-md font-medium inline-block px-1">Xu hướng thời trang</h4>
                        <a href="/" className="block text-gray-600">Xu huong mix do danh cho nam</a>
                    </div>
                </div>
                <div className="col-span-4 lg:block hidden">
                    <h3 className="uppercase text-base font-medium text-gray-700">bài viết xem nhiều nhất </h3>
                    <div className="mt-4">
                        <div className="grid grid-cols-12 gap-4 mb-3">
                            <div className="col-span-4">
                                <img src={news1} alt="" />
                            </div>
                            <div className="col-span-8">
                                <h4 className="truncate text-base uppercase">Xin chào các bạn minh là mai hoàng hênh</h4>
                                <h5 className="text-sm text-gray-400">30-12-2021</h5>
                                <a href="/" className="text-teal-600">Tin khuyen mai</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 mb-3">
                            <div className="col-span-4">
                                <img src={news1} alt="" />
                            </div>
                            <div className="col-span-8">
                                <h4 className="truncate text-base uppercase">Xin chào các bạn minh là mai hoàng hênh</h4>
                                <h5 className="text-sm text-gray-400">30-12-2021</h5>
                                <a href="/" className="text-teal-600">Tin khuyen mai</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 mb-3">
                            <div className="col-span-4">
                                <img src={news1} alt="" />
                            </div>
                            <div className="col-span-8">
                                <h4 className="truncate text-base uppercase">Xin chào các bạn minh là mai hoàng hênh</h4>
                                <h5 className="text-sm text-gray-400">30-12-2021</h5>
                                <a href="/" className="text-teal-600">Tin khuyen mai</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 mb-3">
                            <div className="col-span-4">
                                <img src={news1} alt="" />
                            </div>
                            <div className="col-span-8">
                                <h4 className="truncate text-base uppercase">Xin chào các bạn minh là mai hoàng hênh</h4>
                                <h5 className="text-sm text-gray-400">30-12-2021</h5>
                                <a href="/" className="text-teal-600">Tin khuyen mai</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="flex group mt-10 mx-auto px-4 py-1 items-center text-lg text-gray-600 border border-solid border-black">
                <BsArrowRepeat className="mr-2 mt-1" />
                <span className="group-hover:underline">Xem thêm nhiều tin khác</span>
            </button>
        </div>
    );
}

export default News;
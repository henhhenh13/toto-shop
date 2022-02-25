import bgFotter from '../assets/images/bg-fotter.jpg';

function Footer(props) {
    return (
        <div className="mt-10">
            <div className="w-full h-[300px] bg-center bg-cover relative" style={{ backgroundImage: `url(${bgFotter})` }}>
                <button className="abs-center lg:w-2/4 w-full uppercase bg-amber-500/60 text-2xl font-sm text-neutral-700 px-10 py-3 border-3 border-solid border-gray-300">địa chỉ hệ thống cửa hàng</button>
            </div>
            <div className="bg-black px-5 py-10">
                <div className="grid grid-cols-12 gap-2">
                    <div className="lg:col-span-3 col-span-12">
                        <ul>
                            <li><a href="/" className="text-normal">Mua hàng trực tuyến</a></li>
                            <li><a href="/" className="text-orange">0971.834.559</a></li>
                            <li><a href="/" className="text-orange">1900.123.256</a></li>
                            <li><a href="/" className="text-small">henhhenh13@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-3 col-span-12">
                        <ul className="text-white">
                            <li><a href="/" className="text-normal">hotline góp ý</a></li>
                            <li><a href="/" className="text-orange">1800.1364.2249</a></li>
                            <li><a href="/" className="text-small">henhhenh19@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2 col-span-12">
                        <ul className="text-white">
                            <li><a href="/" className="text-normal">Thông tin</a></li>
                            <li><a href="/" className="text-small">Giới thiệu</a></li>
                            <li><a href="/" className="text-small">Liên hệ công ty</a></li>
                            <li><a href="/" className="text-small">Đối tác</a></li>
                            <li><a href="/" className="text-small text-sky-400">Tuyển dụng</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2 col-span-12">
                        <ul className="text-white">
                            <li><a href="/" className="text-normal">Chính sách</a></li>
                            <li><a href="/" className="text-small">Chính sách bảo hành</a></li>
                            <li><a href="/" className="text-small">Chính sách đổi trả</a></li>
                            <li><a href="/" className="text-small">Chính sách bảo mật</a></li>
                            <li><a href="/" className="text-small">Chính sách hoàn tiền</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2 col-span-12">
                        <ul className="text-white">
                            <li><a href="/" className="text-normal">FAQ</a></li>
                            <li><a href="/" className="text-small">Thanh toán và vận chuyển</a></li>
                            <li><a href="/" className="text-small">Hướng dẫn chọn size</a></li>
                            <li><a href="/" className="text-small">Kiểm tra thông tin đơn hàng</a></li>
                            <li><a href="/" className="text-small">Câu hỏi thường</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
import banner1 from '../assets/images/banner_to_1.jpg';
import banner2 from '../assets/images/banner_to_2.jpg';
import bannerSale1 from '../assets/images/banner_sale_1.jpg';
import bannerSale2 from '../assets/images/banner_sale_2.jpg';

function SaleHot(props) {
    return (
        <div>
            {/* 2 san pham sale to dung */}
            <div className="mt-12 grid grid-cols-12 gap-8">
                <div className="col-span-6">
                    <a href="/"><img src={banner1} alt="img" /></a>
                </div>
                <div className="col-span-6">
                    <a href="/"><img src={banner2} alt="img" /></a>
                </div>
            </div>
            {/* San pham sale noi bat */}
            <div className="mt-12 grid grid-cols-12 gap-8">
                <div className="lg:col-span-6 col-span-12">
                    <a href="/"><img src={bannerSale1} alt="img" /></a>
                </div>
                <div className="lg:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-6">
                            <a href="/" className="relative group block">
                                <img src={bannerSale2} alt="img" />
                                <div className="banner-img"></div>
                            </a>
                        </div>
                        <div className="col-span-6">
                            <a href="/" className="relative group block">
                                <img src={bannerSale2} alt="img" />
                                <div className="banner-img"></div>
                            </a>
                        </div>
                        <div className="col-span-6">
                            <a href="/" className="relative group block">
                                <img src={bannerSale2} alt="img" />
                                <div className="banner-img"></div>
                            </a>
                        </div>
                        <div className="col-span-6">
                            <a href="/" className="relative group block">
                                <img src={bannerSale2} alt="img" />
                                <div className="banner-img"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SaleHot;
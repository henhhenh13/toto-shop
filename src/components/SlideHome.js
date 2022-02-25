
import Slider from 'react-slick';
import ProductItem from './ProductItem';

function SlideHome(props) {
    const settings = {
        slidesToShow: 4,
        rows: 1,
        speed: 500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };

    return (
        <div className="mt-8">
            <div className="mt-10 lg:px-0 px-1">
                <Slider {...settings}>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </Slider>
            </div>
        </div>
    );
}

export default SlideHome;
import Slider from 'react-slick';
import slide1 from '../assets/images/slide_sale_1.jpg';
import slide2 from '../assets/images/slide_sale_2.jpg';

function SlideTop(props) {
    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                <div>
                    <a href="/"><img src={slide1} alt="img" /></a>
                </div>
                <div>
                    <a href="/"><img src={slide2} alt="img" /></a>
                </div>
            </Slider>
        </div>
    );
}

export default SlideTop;
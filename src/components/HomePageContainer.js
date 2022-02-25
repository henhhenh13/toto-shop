import SlideTop from './SlideTop';
import SaleHot from './SaleHot';
import LineDots from './LineDots';
import SlideHome from './SlideHome';
import SaleBottom from './SaleBottom';
import Line from './Line';
import News from './News'
import Footer from './Footer';

function HomePageContainer(props) {

    return (
        <div className="lg:col-span-8 col-span-12 lg:pl-10 lg:pr-5 ">
            <SlideTop />
            <SaleHot />
            <LineDots />
            <SlideHome />
            <SaleBottom />
            <Line />
            <News />
            <LineDots />
            <Footer />
        </div>
    );
}

export default HomePageContainer;
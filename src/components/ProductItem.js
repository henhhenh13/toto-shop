import mini1 from '../assets/images/mini-1.jpg';
import img1 from '../assets/images/product-1.jpg';

function ProductItem(props) {
    return (
        <div className="mb-7">
            <a href="/" className="block  p-full group overflow-hidden relative">
                <img src={img1} alt="img" className="hover:scale-105 transition-all duration-200 ease-linear" />
                <div className="flex justify-center absolute bottom-0 w-full right-0 py-1 bg-white translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 ease-in">
                    <div className="border-solid px-2 border-transparent border hover:border-red-600">
                        <img src={mini1} alt="img" className="w-[40px] h-[55px]" />
                    </div>
                </div>
            </a>
            <h3 className="text-center">219.000 đ</h3>
        </div>
    );
}

export default ProductItem;
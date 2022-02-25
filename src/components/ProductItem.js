import { Link } from 'react-router-dom';
import mini1 from '../assets/images/mini-1.jpg';

function ProductItem({ data }) {
    const { id, price, img, imgBox } = data;
    return (
        <div className="mb-7 mx-2">
            <Link to={`/product-page-${id}`} className="block h-[385px] p-full group overflow-hidden relative">
                <img src={img} alt="img" className="hover:scale-105 h-full transition-all duration-200 ease-linear" />
                <div className="flex justify-center absolute bottom-0 w-full right-0 py-1 bg-white translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 ease-in">
                    <div className="border-solid flex px-2 border-transparent border hover:border-red-600">
                        <img src={mini1} alt="img" className="w-[40px] h-[55px]" />
                    </div>
                </div>
            </Link>
            <h3 className="text-center">{price} đ</h3>
        </div>
    );
}

export default ProductItem;
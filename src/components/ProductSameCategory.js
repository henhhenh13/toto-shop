import ProductItem from './ProductItem';

function ProductSameCategory(props) {
    return (
        <div className="mt-14">
            <div className="relative">
                <h3 className="text-xl uppercase font-medium bg-white px-4 ml-4 inline-block">Sản phẩm cùng danh mục</h3>
                <div className="absolute w-full h-[2px] bg-gray-200 bottom-[10px] z-[-1]"></div>
            </div>
            <div className="mt-4 grid grid-cols-12 gap-3">
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
    );
}

export default ProductSameCategory;
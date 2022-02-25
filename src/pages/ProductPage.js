import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import ProductContainer from "../components/ProductContainer";

function ProductPage(props) {
    return (
        <div className="grid grid-cols-10">
            <NavMobile />
            <NavDesktop />
            <ProductContainer />
        </div>
    );
}

export default ProductPage;
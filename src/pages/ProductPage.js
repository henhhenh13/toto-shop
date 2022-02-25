import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import ProductContainer from "../components/ProductContainer";
import { getProduct } from '../features/totoshop.service';

function ProductPage(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        // dispatch(getProduct(id));
    }, [])
    return (
        <div className="grid grid-cols-10">
            <NavMobile />
            <NavDesktop />
            <ProductContainer />
        </div>
    );
}

export default ProductPage;
import React from 'react';
import NavLinkTop from './NavLinkTop';
import ProductSameCategory from './ProductSameCategory';
import ProudctItemPage from './ProudctItemPage';
import Footer from './Footer';

function ProductContainer(props) {
    return (
        <div className="lg:col-span-8 col-span-12 lg:pl-10 lg:pr-5 ">
            <NavLinkTop />
            <ProudctItemPage />
            <ProductSameCategory />
            <Footer />
        </div>
    );
}

export default ProductContainer;
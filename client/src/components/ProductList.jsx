import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {

    const { products } = props;
    console.log(products)

    return (
        <div>
            {products.map((product, idx) =>
                <div>
                    <Link to={`/products/${product._id}`} key={idx}>{product.title}</Link>
                </div>
            )}
        </div>
    )
}

export default ProductList;
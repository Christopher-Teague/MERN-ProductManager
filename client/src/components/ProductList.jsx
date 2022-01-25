import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {

    ///// Deconstruct products from props passed through Main\\\\\
    const { products } = props;
    // console.log(products)

    return (
        <div>
            {products.map((product, idx) =>
                <div key={idx}>
                    <Link to={`/products/${product._id}`}> {product.title} </Link>
                </div>
            )}
        </div>
    )
}

export default ProductList;
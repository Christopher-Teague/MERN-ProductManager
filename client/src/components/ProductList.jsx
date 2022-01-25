import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {

    const { removeFromDom } = props;

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/'+id)
        .then(res => { removeFromDom(id) })
        .catch(err => console.log(err));
    }

    ///// Deconstruct products from props passed through Main\\\\\
    const { products } = props;
    // console.log(products)

    return (
        <div>
            {products.map((product, idx) =>
                <div key={idx}>
                    <Link to={`/products/${product._id}`}> {product.title} </Link>
                    --
                    <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ProductList;
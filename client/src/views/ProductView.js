import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const ProductView = (props) => {

    const history = useHistory();

    const [product, setProduct] = useState({})
    ///// getting id from url \\\\\ 
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/'+id)
        // .then(res => { removeFromDom(id) })
        .then(res => { history.push('/products') })
        .catch(err => console.log(err));
    }
        
    return (
        <div>
            <h4>Title: {product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + id + "/edit"}>
                Edit
            </Link>
            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}
    
export default ProductView;
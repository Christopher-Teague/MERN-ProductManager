import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const ProductView = (props) => {


    const [product, setProduct] = useState({})
    ///// getting id from url \\\\\ 
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <h4>Title: {product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}
    
export default ProductView;
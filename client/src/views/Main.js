import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import axios from 'axios';

const Main = (props) => {

    ///// products is an array of products \\\\\
    ///// loaded is set to true when axios request is fulfilled \\\\\ 
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, []);

    const removeFromDom = (id) => {
        setProducts(products.filter(product => product._id != id));
    }

    ///// if "loaded" is true, render ProductList, otherwise render "loading..." \\\\\
    return (
        <div>
            <ProductForm />
            <hr />
            {loaded ?
                <ProductList products={products} removeFromDom={ removeFromDom } /> :
                <p>loading...</p>
            }
        </div>
    )
}

export default Main;
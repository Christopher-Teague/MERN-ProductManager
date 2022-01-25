import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import axios from 'axios';

const Main = (props) => {

    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    // const [ message, setMessage ] = useState("Loading...")

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data)
                console.log(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <ProductForm />
            <hr />
            {loaded ?
                <ProductList products={products} /> :
                <p>loading...</p>
            }
        </div>
    )
}

export default Main;
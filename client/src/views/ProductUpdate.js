import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const ProductUpdate = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update a Product</h1>

            <form onSubmit={updateProduct}>
                <label>Title:  </label>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                <br />
                <label>Price:  $</label>
                <input type="number" onChange={e => setPrice(e.target.value)} value={price} min="1" />
                <br />
                <label>Description:  </label>
                <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
                <br />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default ProductUpdate;
import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    ///// set product fields through useState \\\\\
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        ///// make a post request to create a new product \\\\\
        axios.post('http://localhost:8000/api/products', {
            title, price, description
        })
            .then(response => console.log(response.data))
            .catch(err => console.log(err));
        }

    ///// onChange will update useState of each: title, price, description \\\\\
    return (
        <form onSubmit={onSubmitHandler}>
            <label>Title:  </label>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder="name of product"/>
            <br/>
            <label>Price:  $</label>
            <input type="number" onChange={e => setPrice(e.target.value)} value={price} min="1" />
            <br/>
            <label>Description:  </label>
            <input type="text" onChange={e => setDescription(e.target.value)} value={description} placeholder="Description" />
            <br/>
            <button>Submit</button>
        </form>
    )
}

export default ProductForm;
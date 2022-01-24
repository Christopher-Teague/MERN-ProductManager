import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    ///// set product fields through useState \\\\\
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
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
    ///// onChange will update title, price, description \\\\\
    return (
        <form onSubmit={onSubmitHandler}>
            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <br/>
            <label>Price</label>
            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            <br/>
            <label>Description</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            <br/>
            <button>Submit</button>
        </form>
    )
}
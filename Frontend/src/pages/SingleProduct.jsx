import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { data, useParams } from 'react-router-dom';

function SingleProduct() {
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchP = async () => {
            await axios.get(`http://localhost:3000/data/${id}`)
                .then(response => response.data)
                .then(data => {
                    setProduct(data)
                })
                .catch(error => setError(error))
        }
        fetchP();
    }, [])

    return (
        <>
            <img src={product.image} />
            <h1>Product Id: {product.id}</h1>
        </>
    );
}

export default SingleProduct;

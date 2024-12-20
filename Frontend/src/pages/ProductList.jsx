import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then(response => response.data)
            .then(data => setproducts(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='Catalogue h-full ml-52 grid grid-cols-1 gap-10'>
            {products.map((product) => (
                <Link className='cursor-default' key={product.id} to={`/product/${product.id}`}>
                    <div className='product-box mt-2'>
                        <div className='flex items-start'><img className='w-80' src={product.image} />
                            <h1 className='mt-14 font-serif font-thin'>{product.title}</h1>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}


export default Products;
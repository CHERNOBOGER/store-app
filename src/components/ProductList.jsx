import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="product-list">
            <h1>All Products</h1>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <Link to={`/product/${product.id}`} className="product-title">
                            {product.title}
                        </Link>
                        <RatingStars rating={product.rating.rate} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
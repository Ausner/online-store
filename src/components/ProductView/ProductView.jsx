import React, { useState, useEffect } from "react";
import "./ProductView.css";
import { useParams } from 'react-router-dom';
import data from '../../data/products-data';

export const ProductView = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(data);
    const [productCount, setproductCount] = useState(0);

    const { id } = useParams();
    const product = products.find((p) => p.id == id);

    if (cart.length === 0) {
        const previousCartData = localStorage.getItem('Cart');
        if (previousCartData) {
            const cartData = JSON.parse(previousCartData);
            setCart(cartData)
            cartData.map((p) => {
                if (p.product.id == id) {
                    setproductCount(p.qty);
                }
            })
        }
    }



    const handleIncrease = (id) => {
        setCart((prev) => {
          return prev.map((p) => {
            if (p.product.id === id) {
                setproductCount(p.qty +1);

              return { ...p, qty: p.qty + 1 };
            }
            return p;
          });
        });
      };
    
      const handleDecrease = (id) => {
        setCart((prev) => {
          return prev.map((p) => {
            if (p.product.id === id) {
                setproductCount(p.qty === 1 ? 1 : p.qty - 1);
              return { ...p, qty: p.qty === 1 ? 1 : p.qty - 1 };
            }
            return p;
          });
        });
      };

      useEffect(() => { if (cart.length > 0) { localStorage.setItem('Cart', JSON.stringify(cart)) } }, [cart]);


    return (
        <div className="product-view-container">
            <h1>{product?.name}</h1>
            <div className="image-description">
                <img width={500} src={product.image} />
                <p className="p-p">{product.description}</p>
            </div>
            <div className="product-view-buttons">
                <button className="p-view-button" onClick={()=> handleDecrease(Number(id))}>➖</button>
                {productCount}
                <button className="p-view-button" onClick={()=> handleIncrease(Number(id))}>➕</button>
            </div>

        </div>
    )
}
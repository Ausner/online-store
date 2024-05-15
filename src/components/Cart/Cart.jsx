import React, { useState, useEffect } from "react";
import './Cart.css';
import { v4 as uuid } from 'uuid';
import { Receipt } from "../Receipt/Receipt";
import { Spinner } from "../Spinner/Spinner";
import { Footer } from "../Footer/Footer";
import { Link } from 'react-router-dom';

export const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('')

  if (cart.length === 0) {
    const data = localStorage.getItem('Cart');
    if (data) {
      setCart(JSON.parse(data));
    }
  }


  const handleRemoveItemInCart = (id) => {
    if (cart.length === 1) {
      localStorage.clear('Cart')
      setCart([]);
      return;
    }
    setCart((prev) => {
      return prev.filter((p) => p.product.id !== id);
    });


    if (!(cart.filter((p) => p.qty > 0 ))) {
      localStorage.clear('Cart')
      setCart([]);
    }

  };

  const handleIncrease = (id) => {
    setCart((prev) => {
      return prev.map((p) => {
        if (p.product.id === id) {
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
          return { ...p, qty: p.qty === 1 ? 1 : p.qty - 1 };
        }
        return p;
      });
    });
  };


  const generateReceiptCode = () => {
    const newUuid = uuid();
    setId(newUuid);
  }

  const startLoading = () => {
    generateReceiptCode();
    setLoading(true);
    setTimeout(() => {
      setCart([]);
      setLoading(false);
    }, 3000);
  };

  const total = cart.reduce((prev, p) => {
    return prev + p.product.price * p.qty;
  }, 0);

  useEffect(() => { console.log("CART SET EFFECT"); if (cart.length > 0) { localStorage.setItem('Cart', JSON.stringify(cart)) } }, [cart]);


  return (
    <>
      {
        loading ? <div className="cart-wrapper"><Spinner /></div> : null}

      {

        id && !loading ? (
          <Receipt id={id} />
        )
          : (

            <div className="cart-wrapper">
              <h2 className="summary-title">Summary:</h2>
              {
                cart.length > 0 ? (

                  cart.map((data) => {
                    const { product, qty } = data;
                    const { id, name, price, description, category, image } = product;
                    return (
                      <>
                        {
                          qty > 0 ? (
                            <div key={id} className="product">
                              <h1>x{qty}</h1>
                              <h2 className="title">{name}</h2>
                              <div className="img">
                                <Link to={"/product-view/" + id}><img src={image} alt={name} /></Link>
                              </div>
                              <div className="details"><p>{description}</p></div>

                              <div className="btns">
                                <button onClick={() => handleDecrease(id)}>➖</button>
                                <button onClick={() => handleIncrease(id)}>➕</button>
                                <button onClick={() => handleRemoveItemInCart(id)}>
                                  ❌
                                </button>
                              </div>
                              <hr />
                            </div>
                          ) : null
                        }
                      </>

                    );
                  })

                ) : <h2 className="summary-title">Empty!</h2>
              }

              <hr />
              <h2 className="total">Total: ${total}</h2>
              <hr />
              {cart.length ? (
                <div className="clear-pay-buttons">
                  <button onClick={() => { localStorage.clear('Cart'); setCart([]) }}>Clear All</button>
                  <button onClick={() => { localStorage.clear('Cart'); startLoading() }}>Pay</button>
                </div>
              ) : null}
            </div>
          )

      }
      <Footer />
    </>

  )

}
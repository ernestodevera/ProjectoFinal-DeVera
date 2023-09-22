import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import CartContext from '../../context/CartContext';
import Checkout from '../Checkout/Checkout';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate(); 

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleCompletePurchase = () => {
    setShowForm(true);
    navigate('/checkout');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setShowSuccessMessage(true);
    }, 1000); 
  };

  return (
    <section className={`h-100 ${styles.hCustom}`} >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className={`card card-registration card-registration-2 ${styles.card}`} style={{ borderRadius: '15px' }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{cart.length} items</h6>
                      </div>
                      <hr className="my-4"/>

                      {cart.length === 0 ? (
                        <div className="text-center">
                          <p>There are no items in the cart</p>
                          <Link to="/" className="btn btn-danger">
                          Return to the store
                          </Link>
                        </div>
                      ) : (
                        <div>
                          {cart.map((item) => (
                            <div key={item.id} className={`row mb-4 d-flex justify-content-between align-items-center ${styles.cartItem}`}>
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img src={item.imageid} className="img-fluid rounded-3" alt={item.title} />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{item.categoryId}</h6>
                                <h6 className="text-black mb-0">{item.title}</h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button className="btn btn-link px-2" onClick={() => handleRemoveItem(item.id)}>
                                  <i className="fas fa-times"></i>
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">{item.quantity} unit{item.quantity !== 1 ? 's' : ''}</h6>
                                <h6 className="mb-0">$ {item.quantity * item.price}</h6>
                              </div>
                            </div>
                          ))}

                          <hr className="my-4"/>

                          <div className="pt-5">
                            <h6 className="mb-0"><Link to="/" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link></h6>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`col-lg-4 bg-grey ${styles.summary}`}>
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4"/>

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items {cart.length}</h5>
                        <h5>$ {calculateTotal().toFixed(2)}</h5>
                      </div>

                      <hr className="my-4"/>

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>$ {calculateTotal().toFixed(2)}</h5>
                      </div>

                      {!showForm && (
                        <div>
                          <button
                            type="button"
                            className="btn btn-danger"
                            
                            onClick={handleCompletePurchase}
                          >
                            Complete Purchase
                          </button>
                          
                          <button
                            type="button"
                            className="btn btn-danger d-flex justify-content-end"
                            
                            onClick={clear}
                          >
                            Empty Cart
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showForm && !showSuccessMessage && (
        <div className="container">
        </div>
      )}

      {showSuccessMessage && (
        <div className="container">
          <h2>Your purchase was successful</h2>
        </div>
      )}
    </section>
  );
};

export default Cart;

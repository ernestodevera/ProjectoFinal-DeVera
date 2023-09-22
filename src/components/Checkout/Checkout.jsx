import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../utils";
import { createOrder } from "../../services";
import styles from './Checkout.module.css';

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);

  const total = getCartTotal(cart);

  const handleCheckout = () => {
    const order = {
      buyer: {
        name: "John",
        phone: "123456789",
        email: "john@gmail.com",
      },
      items: mapCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

  return (
    <div className="container-sm">
      <h1>Order Summary</h1>
  
      {orderId && <p>Order ID: {orderId}</p>}
  
      {!orderId && (
        <div className="row">
          <div className="mb-3">
            <h3>Contact Form</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              
            </form>
          </div>
  
          <div>
            <h4>Products</h4>
              <div>
                {cart.map((item) => (
                  <div key={item.id}>
                    <div className="card mb-3" style={{ maxWidth: "500px" }}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={item.imageid} className="img-fluid rounded-start" alt={item.title} />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title text-end">{item.title}</h5>
                            <p className="card-text text-end">Quantity: {item.quantity}</p>
                            <p className="card-text text-end">Price per unit: ${item.price}</p>
                            <p className="card-text text-end">Subtotal: ${item.price * item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

          </div>
  
          <h2>Total purchase amount: ${total}</h2>
  
          <button 
          type="button"
          className="btn btn-danger"
          data-mdb-ripple-color="dark"
          onClick={handleCheckout}>Complete Purchase</button>
  
          {isLoading && <p>Processing order...</p>}
        </div>
      )}
    </div>
  );
  
};

export default Checkout;

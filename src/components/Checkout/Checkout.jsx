import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../utils";
import { createOrder } from "../../services";

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
    <div className="container mt-5">
      <h1>Checkout</h1>

      <h2>Resumen de la compra</h2>

      {orderId && <p className="alert alert-success">El id de la orden es: {orderId}</p>}

      {!orderId && (
        <div className="row">
          <div className="col-md-6">
            <h4>Formulario de contacto</h4>
            {/* TODO: Formulario */}
          </div>

          <div className="col-md-6">
            <h4>Productos</h4>
            <ul className="list-group">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item">
                  <p>{item.title}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio por unidad: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3">Total de la compra: ${total}</p>
          </div>

          <div className="col-md-12">
            <button className="btn btn-primary mt-3" onClick={handleCheckout}>Finalizar compra</button>
            {isLoading && <p>Procesando compra...</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

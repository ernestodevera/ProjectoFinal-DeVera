import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../utils";
import { createOrder } from "../../services";
import { Form, Button } from "react-bootstrap"; // Importar los componentes de formulario de Bootstrap

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);

  const total = getCartTotal(cart);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visibilidad del formulario

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
      setShowForm(true); // Mostrar el formulario después de realizar la compra
    });
  };

  return (
    <div>
      <h1>Checkout</h1>

      <h2>Resumen de la compra</h2>

      {orderId && <p>El id de la orden es: {orderId}</p>}

      {!orderId && (
        <>
          <div>
            <h4>Formulario de contacto</h4>
            {/* Formulario de contacto */}
            {showForm && (
              <Form>
                {/* Campos del formulario */}
              </Form>
            )}
          </div>

          <div>
            <h4>Productos</h4>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {/* Detalles del producto */}
                </li>
              ))}
            </ul>
          </div>

          <p>Total de la compra: ${total}</p>

          <Button variant="primary" onClick={handleCheckout}>
            Finalizar compra
          </Button>

          {isLoading && <p>Procesando compra...</p>}
        </>
      )}
    </div>
  );
};

export default Checkout;

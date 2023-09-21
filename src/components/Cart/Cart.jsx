import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Nuevo estado

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario si es necesario

    // Simulación de éxito
    setTimeout(() => {
      setShowSuccessMessage(true);
    }, 1000); // Muestra el mensaje después de 1 segundo (puedes ajustar el tiempo)
  };

  return (
    <div className='container'>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div>
          <p>No hay ítems en el carrito.</p>
          <Link to="/">Volver a la página principal</Link>
        </div>
      ) : (
        <div className='container'>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.imageid} className="img-fluid rounded-start" alt={item.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      Cantidad: {item.quantity}<br />
                      Precio Unitario: ${item.price}<br />
                      Subtotal: ${item.quantity * item.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p>Total: ${calculateTotal()}</p>
          <button onClick={clear} className="btn btn-danger">Vaciar Carrito</button>
          <button onClick={() => setShowForm(true)} className="btn btn-danger">Completar Compra</button>
          <Link to="/" className="btn btn-danger">Volver a la página principal</Link>
        </div>
      )}

      {showForm && !showSuccessMessage && ( // Mostrar formulario solo si no se muestra el mensaje de éxito
        <div className='container'>
          <h2>Formulario de Compra</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
            
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </form>
        </div>
      )}

      {showSuccessMessage && ( // Mostrar mensaje de éxito y botón de volver
        <div className='container'>
          <h2>Su compra fue exitosa</h2>
          
        </div>
      )}
    </div>
  );
};

export default Cart;

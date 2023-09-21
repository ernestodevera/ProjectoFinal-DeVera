import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { getCartQuantity } from "../../utils";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  // Obtener el contexto del carrito
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de ítems en el carrito utilizando la función getCartQuantity
  const quantity = getCartQuantity(cart);

  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleCartClick = () => {
    // Navega a la página del carrito cuando se hace clic en el botón del carrito
    navigate("/cart");
  };

  return (
    <div>
      <button
        className="btn btn-outline-primary position-relative"
        onClick={handleCartClick} // Agrega un manejador de clic para redirigir al carrito
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          {/* Icono del carrito */}
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
        {/* Mostrar la cantidad de ítems en el carrito */}
        {quantity > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {quantity}
            <span className="visually-hidden">productos en carrito</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default CartWidget;

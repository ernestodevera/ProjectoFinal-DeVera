/*import `./ItemCount.css` */
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { propTypes } from "react-bootstrap/esm/Image";



const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const incremet = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (

        

        <div className="Counter">
            <div className="Controls d-flex ">
                <Button className="Button" onClick={decrement}>-</Button>
                <h1 className="Number">{quantity}</h1>
                <Button className="Button" onClick={incremet}>+</Button>
            </div>

            <div>
                <Button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </Button>
            </div>


        
        </div>
    )
};

export default ItemCount;
import { useState } from 'react'
import { FaPlus, FaMinus} from "react-icons/fa";



function OrderQuanity({quantity, onQuantityChange}){
    // const[quantity, setQuantity] = useState(0);

    const increment = () => {
        const newQuantity = quantity === 10 ? 10 : quantity + 1;
        onQuantityChange(newQuantity);
    }

    const decrement = () => {
        const newQuantity = quantity === 0 ? 0 : quantity - 1;
        onQuantityChange(newQuantity);
    }

    return (
        <div class="clicker">
            <i><FaMinus onClick={decrement} /></i>
            {quantity}
            <i><FaPlus onClick={increment} /></i>
        </div>
    )
}
export default OrderQuanity;
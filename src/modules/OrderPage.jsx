import { useState } from 'react';
import products from '../data/products';
import OrderRow from './OrderRow.jsx';

function OrderPage({ products }){
    const [quantities, setQuantities] = useState(products.map(() => 0 ));

    const calculateSubtotal = (price, quantity) => price * quantity;
    const runningTotal = quantities.reduce((total, quantity, index) => total + calculateSubtotal(products[index].price, quantity), 0);


    const handleQuantityChange = (index, quantity)=>{
        const newQuantities = [...quantities];
        newQuantities[index] = quantity;
        setQuantities(newQuantities);
    }

    return (
        <>
            <h2>Purchase Order</h2>
            <p>Please select the quantity of items needed.</p>
            <article>
                <p></p>
                <table id=''>
                    <caption>Purchas Order Details</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index ) =>
                        <OrderRow
                            key={index}
                            product={product}
                            quantity={quantities[index]}
                            onQuantityChange={(quantity) => handleQuantityChange(index,quantity)}
                            calculateSubtotal={calculateSubtotal}
                             />)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="4">Running Total</th>
                            <th className="price"> 
                                {runningTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2})}
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </article>
        </>
    );
}
export default OrderPage;
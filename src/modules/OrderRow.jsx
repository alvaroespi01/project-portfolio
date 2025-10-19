import OrderQuantity from './OrderQuantity.jsx';

function OrderRow({ product, quantity, onQuantityChange, calculateSubtotal }) {
    const subtotal = calculateSubtotal(product.price, quantity);

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td className="price">
                {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}
            </td>
            <td>
                <OrderQuantity quantity={quantity} onQuantityChange={onQuantityChange} />
            </td>
            <td className="price">
                {subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}
            </td>
        </tr>
    );
}

export default OrderRow;

import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <p className = "basket">🛒</p>
            <p className = "totalSum">Сумма: {totalPrice} рублей</p>
            {cartItems.map(cartItem => <CartItem cartItem = {cartItem} />)}
        </div>
    )
}

export default Cart;
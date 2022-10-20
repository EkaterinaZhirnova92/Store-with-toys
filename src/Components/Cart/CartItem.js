import dataToys from "../../data/dataToys";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux/es/exports";

const CartItem = ({cartItem}) => {
    const toys = dataToys.find(item => item.id === cartItem.toyId)
    const dispatch = useDispatch();

    return(
        <div className="cartItem">
            <p>{toys.name}</p>
            <p>{cartItem.quantity} игрушка(игрушки)</p>
            <p>Цена: {toys.price * cartItem.quantity}</p>
            <span className = "basket" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>🗑️</span>
        </div>
    )
}

export default CartItem;
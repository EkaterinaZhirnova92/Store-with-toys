import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Toy = ({toy}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()


return(
    <div className = "toy">
        <h2>{toy.name}</h2>
        <p>{toy.price}</p>
        <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity} />
        <button onClick = {() => {dispatch(addItemToCart({toy, quantity}))}}>Добавить в корзину</button>
        <br />
        <img className="image" src = {`${toy.img}.jpg`} />
        
    </div>
)
}
export default Toy;
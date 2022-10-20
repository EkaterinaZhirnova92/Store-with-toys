import dataToys from "../../data/dataToys";
import Toy from "./Toy";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getSelectedCategory } from "../../redux/toysSlice";

const Toys = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            {dataToys
            .filter(toy => {
                if (selectedCategory === 'ВСЕ') return true;
                return selectedCategory === toy.category;
            })
            .map(toy => <Toy toy = {toy}/>)}
        </div>
    )
}

export default Toys;
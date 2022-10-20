import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>Какую категорию выбрать?</h1>
            {['КУКЛЫ', 'МАШИНКИ', 'МЯГКИЕ ИГРУШКИ', 'УМНЫЕ ИГРУШКИ', 'ВСЕ']
            .map(category => <Filter category = {category}/>)}
        </div>
    )
}
export default AllCategories;
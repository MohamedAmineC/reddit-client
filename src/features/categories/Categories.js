import { useSelector } from "react-redux";
import { selectCategories } from "./categoriesSlice";
import './Categories.css';
import popular from './icons/popular.png'
import { NavLink } from "react-router-dom";

const Categories = () => {
    const categories = useSelector(selectCategories);

    return (
        <div className="categories-bar">
            <ul>
                <li>Flux</li>
                <NavLink to="/category/popular" className="category"><img src={popular} alt="populaires" /><p>Populaires</p></NavLink>
                <li>Thématiques</li>
                {
                    categories.map((category,index) => 
                    <NavLink to={`/category/${category.name}`} key={index} className="category">
                        <img src={category.icon} alt={category.name} />
                        <p>{category.name}</p>
                    </NavLink>)
                }
            </ul>
        </div>
    )
}
export default Categories;
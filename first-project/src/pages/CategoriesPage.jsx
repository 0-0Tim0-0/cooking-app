import { useEffect, useState } from "react";
import homeIcon from "../assets/figmaimages/categories/Home.svg";
import LoadingRow from "../components/LoadingRow";
import axios from "axios";
import { Link } from "react-router-dom"


function CategoriesPage () {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true)
                const response = await axios.get(`https://0475b2dde042d3f3.mokky.dev/category`);
                setCategories(response.data);

            } catch(e) {
                console.log(e);
            }finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);
    return(
        <section class="mobile-block">
            <div class="mobile-block_header is-warning">
                Категории Блюд
            </div>
            {isLoading ? (<LoadingRow />) :(
                <div class="container">
                    <div class="category-row"> 
                        <Link to="/" class="category-item">
                            <img src={homeIcon} alt="" class="category-item__img"/>
                            <span class="category-item__title">Все блюда</span>
                        </Link>
                        {categories.map((category) =>(
                            <Link to={`/category/posts/${category.id}`} class="category-item">
                                <img src={category.imageURL} alt={category.name} class="category-item__img"/>
                                <span class="category-item__title">{category.name}</span>
                            </Link> 
                        ))}
                              
                    </div>
                </div>            
            )}
            
        </section>

    );


}
export default CategoriesPage;
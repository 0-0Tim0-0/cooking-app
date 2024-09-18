import { useState, useEffect } from "react";
import LoadingPost from "../components/LoadingPost";
import axios from "axios";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";


function PostByCategoriesPage() {

    const{id} = useParams();
    const [category, setCategory] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState (false);
    useEffect(() => {
        async function fetchCategory () {
            try {
                const response = await axios.get(`https://0475b2dde042d3f3.mokky.dev/category/${id}`);
                setCategory(response.data);
            }catch(e) {
                console.log(e);
            }
        }
        
        
        
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get("https://0475b2dde042d3f3.mokky.dev/post");
                console.log(response.data);
                setPosts(response.data); 
            } catch(error)  {
                console.log(error);
            } finally {
                setIsLoading(false)  ;  
            }
        }
        fetchPosts();
        fetchCategory()
    }, [id]); 
    return (                      
        <section class="mobile-block">
             <div class="mobile-block_header is-downmenu">
                {category.name}
            </div>
            <div class="all-news-block">
                {isLoading ? (<LoadingPost />) : (
                    <>
                        {posts.map((post) => {
                            return post.category === category.name ? (
                                <PostCard key={post.id} post={post} />
                            ) : null
                        })}
                    </>
                    
                )}
                
            </div>
        </section>


        
    
    
    );
}
export default PostByCategoriesPage;
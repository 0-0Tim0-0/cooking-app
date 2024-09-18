import { Link, useParams } from "react-router-dom";
import backIcon from "../assets/figmaimages/arrow.svg"
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingDetail from "../components/LoadindDetail";
import Error from "../components/Error";

function PostDetailPage () {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchPost() {
            try {
                setIsLoading(true)
                const response = await axios.get(`https://0475b2dde042d3f3.mokky.dev/post/${id}`);
                setPost(response.data);
            }  catch (error) {
                setIsError(true)
                console.log(error);             
            } finally {
                setIsLoading(false);

            }
        }
        fetchPost();
    }, [id]);
    if (isError) {
        return <Error />;
    }


    return (
        <section class="mobile-block">
            <Link to="/" class="back-button">
                <div class="container">
                    <img src={backIcon} alt="back icon" />
                    Назад
                </div>
            </Link>
            {isLoading ? (<LoadingDetail />) : (
                    <div class="container">
                        <div class="post-detail-block">
                            <h3 class="news-card-title">{post.title}</h3>
                            <span class="news-card-date">{post.date}</span>
                            <p class="description">
                                {post.description}
                            </p>
                            <img src={post.imageURL} alt="tomato"/>
                            <span class="author">Источник: <strong class="light-success-text">{post.author}</strong></span>
                            <button class="tag-button">{post.category}</button>
                        </div>
                    </div>
            )}
            
        
        </section>


    );
}
export default PostDetailPage;
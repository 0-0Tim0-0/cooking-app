import PostList from "../components/PostList";

function MenuPage () {
    return (
        <section class="mobile-block">
            <div class="mobile-block_header is-downmenu">
                Все блюда
            </div>
            <PostList />    

        </section>
    
    );
}
export default MenuPage;
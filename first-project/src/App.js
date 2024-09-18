import "./assets/css/figmaapp.css";
import Header from "./components/Header";
import MenuPage from "./pages/MenuPage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import PostByCategoriesPage from "./pages/PostByCategoriesPage";
import {Routes, Route} from "react-router-dom";
function App() {
  return (
   <div>
    <Header />
  <main>
    <Routes>
       <Route path="/" element={<MenuPage/>} />
        <Route path="/post/:id" element={<PostDetailPage/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/category/posts/:id" element={<PostByCategoriesPage/>} />
    </Routes> 



  </main> 
   
   </div>
  );
}

export default App;

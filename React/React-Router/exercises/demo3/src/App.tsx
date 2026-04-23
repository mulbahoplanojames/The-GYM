import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/public/root-layout";
import Home from "./pages/public/home";
import Login from "./pages/auth/login";
import AuthLayout from "./layout/auth/auth-layout";
import Register from "./pages/auth/regitser";
import AdminLayout from "./layout/admin/admin-layout";
import Dashboard from "./pages/admin/dashboard";
import UserLayout from "./layout/user/user-layout";
import News from "./pages/public/news";
import Products from "./pages/public/products/products";
import Pokemons from "./pages/public/pokemons";
import SingleProduct from "./pages/public/products/single-products";
import Posts from "./pages/public/blogs/posts";
import SinglePost from "./pages/public/blogs/single-post";
import Reviews from "./pages/public/products/sub-tabs/reviews";
import Images from "./pages/public/products/sub-tabs/images";
import ProductDetails from "./pages/public/products/sub-tabs/product-details";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />}>
            <Route index element={<ProductDetails />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="images" element={<Images />} />
          </Route>
          <Route path="pokemons" element={<Pokemons />} />
          <Route path="blog" element={<Posts />} />
          <Route path="blog/:category/:postId" element={<SinglePost />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/user" element={<UserLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

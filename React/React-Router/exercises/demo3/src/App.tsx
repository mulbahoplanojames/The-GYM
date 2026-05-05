import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
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
import NotFound from "./pages/public/not-found";
import ProtectedRoute from "./components/protected-route";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route
            path="products"
            element={
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="products/:id"
            element={
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <SingleProduct />
              </ProtectedRoute>
            }
          >
            <Route index element={<ProductDetails />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="images" element={<Images />} />
          </Route>
          <Route path="pokemons" element={<Pokemons />} />
          <Route
            path="blog"
            element={<Posts />}
            errorElement={
              <div className="flex flex-col items-center justify-center p-10">
                <h1 className="text-2xl font-bold text-red-500">Oops!</h1>
                <p>Failed to load blog posts. Please try again later.</p>
              </div>
            }
            loader={() => {
              return Response.json("Hello", { status: 200 });
            }}
          />
          <Route path="blog/:category/:postId" element={<SinglePost />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="dashboard" element={<Dashboard />} />
        </Route>

        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="dashboard" element={<Dashboard />} />
        </Route>
      </>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

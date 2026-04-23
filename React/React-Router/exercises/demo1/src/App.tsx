import { Routes, Route } from "react-router-dom";
import Home from "./pages/public/home";
import Contact from "./pages/public/contact";
import News from "./pages/public/news";
import SingleNew from "./pages/public/single-new";
import Posts from "./pages/public/posts";
import SinglePost from "./pages/public/single-post";
import RootLayout from "./layout/root-layout";
import AdminLayout from "./layout/admin-layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Posts />} />
          <Route path="/blog/:category/:postId" element={<SinglePost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<SingleNew />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

/**
 * 
  - loader: A function that runs before the component renders. It fetches data from an API so the component has everything it needs the moment it appears.
  
  - action: A function used for handling form submissions (POST/PUT/DELETE requests) directly through the router.

  - errorElement: A component that displays specifically if the loader or action fails
 */

import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Comments from "./pages/comments/Comments";
import Offs from "./pages/offs/Offs";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
  { path: "/products", element: <Products /> },
  { path: "/comments", element: <Comments /> },
  { path: "/offs", element: <Offs /> },
];

export default routes;

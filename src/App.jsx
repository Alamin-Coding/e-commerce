// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { GlobalStyle } from "./global-style.js";
import { ThemeProvider } from "styled-components";
import Root from "./routes/root.jsx";
import ErrorPage from "./routes/error-page.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Products from "./routes/Products";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import SingleProduct from "./routes/Single-product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/singleproduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

function App() {

  const theme = {
    colors: {
      bg: "#ffffff",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100% )",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

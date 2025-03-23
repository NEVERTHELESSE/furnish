import React, { Suspense, lazy } from "react";
import HeaderLoading from "./components/loading/HeaderLoading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLoading from "./components/loading/HomeLoading";
import ProductLoading from "./components/loading/ProductLoading";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const SingleProduct = lazy(() => import("./pages/single/SingleProduct"));
const Product = lazy(() => import("./pages/products/Products"));
const Office = lazy(() => import("./pages/office/Office"));
const Header = lazy(() => import("./components/header/Header"));
export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={HeaderLoading}>
          <Header />
        </Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={HomeLoading}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/office"
            element={
              <Suspense>
                <Office />
              </Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <Suspense fallback={ProductLoading}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="products/:productId"
            element={
              <Suspense fallback="loading">
                <SingleProduct />
              </Suspense>
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

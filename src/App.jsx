import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/about-us" Component={AboutUs} />
            <Route path="/products" Component={Products} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

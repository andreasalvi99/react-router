import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about-us" Component={AboutUs}></Route>
          <Route path="/Products" Component={Products}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

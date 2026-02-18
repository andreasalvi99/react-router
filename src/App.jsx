import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import HomePage from "./assets/components/pages/HomePage";
import AboutUs from "./assets/components/pages/AboutUs";

export default function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutUs />
    </>
  );
}

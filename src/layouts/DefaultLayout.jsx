import { Outlet } from "react-router-dom";
import Header from "../components/Header";
Outlet;
Header;

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <section className="p-4">
        <div className=".container text-center">
          <Outlet />
        </div>
      </section>
    </>
  );
}

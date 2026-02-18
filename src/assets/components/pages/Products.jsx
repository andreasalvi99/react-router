import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(" https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <section className="p-4">
      <div className=".container text-center">
        <div className="row row-cols-4 g-3">
          {products.map((product) => {
            return (
              <div key={product.div} className="col">
                <img src={product.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

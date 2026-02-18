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
    <div className="row row-cols-4 g-4">
      {products.map((product) => {
        return (
          <div key={product.div} className="col-lg-3 col-md-6 col-sm-12 ">
            <figure>
              <img src={product.image} alt="" />
            </figure>
          </div>
        );
      })}
    </div>
  );
}

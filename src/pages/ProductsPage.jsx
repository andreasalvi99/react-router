import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="row row-cols-5 g-0">
      {products.map((product) => {
        return (
          <div key={product.id} className="col">
            <div className="card h-100 d-flex flex-column">
              <Link
                to={"/products/" + product.id}
                className="text-decoration-none link-body-emphasis"
              >
                <figure className="p-2 flex-grow-1 align-self-center img-container">
                  <img
                    src={product.image}
                    className="card-img-top product-img"
                    alt={product.title}
                  />
                </figure>

                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">{product.title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">&euro; {product.price}</li>
                </ul>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductsDetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProductDetail = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setIsLoading(false);
      setDetails(response.data);
    });
  };

  useEffect(fetchProductDetail, []);

  if (details === "") {
    console.log("ciaooo");
    navigate("/products");
  }

  return (
    <>
      {isLoading ? (
        <div className="layover">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-around bg-body-tertiary text-dark rounded">
          <figure className="p-4">
            <img src={details.image} alt={details.title} />
          </figure>
          <div className="align-self-star p-3">
            <h5 className="mt-4">{details.title}</h5>
            <p>{details.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

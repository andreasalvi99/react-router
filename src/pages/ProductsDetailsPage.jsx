import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [errorAlert, setErrorAlert] = useState(false);

  const fetchProductDetail = () => {
    axios
      .get(`https://fakestoreapi.com/productsss/${id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        setErrorAlert(true);
      });
  };

  useEffect(fetchProductDetail, []);

  if (errorAlert)
    return (
      <div className="alert alert-danger" role="alert">
        ciao
      </div>
    );

  return (
    <div className="d-flex justify-content-around bg-body-tertiary text-dark rounded">
      <figure className="p-4">
        <img src={details.image} alt={details.title} />
      </figure>
      <div className="align-self-star p-3">
        <h5 className="mt-4">{details.title}</h5>
        <p>{details.description}</p>
      </div>
    </div>
  );
}

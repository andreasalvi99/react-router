import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductsDetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fallBack = useNavigate();

  const fetchProductDetail = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setIsLoading(false);
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error.request.status);

        setErrorAlert(true);
        setErrorMessage(error.message);
      });
  };

  useEffect(fetchProductDetail, []);

  //   if (errorAlert)
  //     return (
  //       <div className="alert alert-danger" role="alert">
  //         {errorMessage}
  //       </div>
  //     );

  return (
    <>
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      ( details ?
      <div className="d-flex justify-content-around bg-body-tertiary text-dark rounded">
        <figure className="p-4">
          <img src={details.image} alt={details.title} />
        </figure>
        <div className="align-self-star p-3">
          <h5 className="mt-4">{details.title}</h5>
          <p>{details.description}</p>
        </div>
      </div>{" "}
      : <div className="layover"></div>)
    </>
  );
}

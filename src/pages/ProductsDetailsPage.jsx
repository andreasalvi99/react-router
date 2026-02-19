import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const fetchProductDetail = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {});
  };

  return <div>Ecco il prodotto {id}</div>;
}

import {React} from "react";
import { useParams } from "react-router-dom";

function Testimonial() {
  const { id } = useParams();
  return (
    <>
      <h2>this is testimonial</h2>
      <h1>Testimonial number {id}</h1>
      

    </>
  );
}

export default Testimonial;

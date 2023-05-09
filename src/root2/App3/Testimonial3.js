import { React } from "react";
import { useParams, Outlet } from "react-router-dom";

function Testimonial3() {
  const { id } = useParams();
  return (
    <>
      <h2>this is testimonial 3</h2>
      <h1>Testimonial number {id}</h1>

      <Outlet context={{ name: "matuki" }} />
    </>
  );
}

export default Testimonial3;

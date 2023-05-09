import { React } from "react";
import { useParams, Outlet } from "react-router-dom";

function Testimonial2() {
  const { id } = useParams();
  return (
    <>
      <h2>this is testimonial 2</h2>
      <h1>Testimonial number {id}</h1>

      <Outlet />
    </>
  );
}

export default Testimonial2;

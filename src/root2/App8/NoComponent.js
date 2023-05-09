import {  useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function NoComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);



  useEffect(() => {
    setTimeout(() => {
      navigate("/", {state : "error in find"})
    }, 3000);
  }, [])

  return (
    <>
      "in 3 second, redirect to home"
    </>
  );
}

export default NoComponent;
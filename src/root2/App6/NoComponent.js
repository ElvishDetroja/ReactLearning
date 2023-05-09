import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NoComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
      // navigate(-1)
      // navigate(-5)
      // navigate(1)
    }, 3000);
  }, []);

  return (
    <>
      {/* "here is nothing to show" */}
      {/* <Navigate to="/"/> */}

      "in 3 second, redirect to home"
    </>
  );
}

export default NoComponent;


// replace and state no use navigate ma kari sakay.
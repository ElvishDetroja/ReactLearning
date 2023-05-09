import React from 'react'
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  return (
    <>
    <h1>This is home</h1> {location.state}
    </>
  )
}

export default Home
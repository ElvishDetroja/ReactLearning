import React from 'react'
import { useOutletContext } from 'react-router-dom';

function Testimonial3New() {

    const obj = useOutletContext();
  return (
    <>
    this is Testimonial 3 {obj.name}
    </>
  )
}

export default Testimonial3New
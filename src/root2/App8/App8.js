import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import Book from "./Book";
import NoComponent from './NoComponent';
import Home from "./Home";


function App8() {
  return (
    <>
    <Link to="/" state="Hello World">Go to home</Link> <br />
    <Link to="/book" state={{ name: "Kyle" }}>Go to book</Link><hr />

    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
        <Route path="/*" element={<NoComponent/>} state={{ name: "kala" }}></Route>
    </Routes>
    
    </>
  )
}

export default App8
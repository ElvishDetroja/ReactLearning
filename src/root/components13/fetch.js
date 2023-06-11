import { useState, useEffect } from "react";
import axios from "axios";





function Fetch() {
  const [data, setData] = useState();




  useEffect(() => {
    async function getData() {
      const call = await fetch("https://dummyjson.com/products");
      const res = await call.json();
      return res;
    }
    getData().then(res => {
      console.log(res.products);
      setData(res.products);

    })
  }, []);




  useEffect(() => {
    async function getData() {
      const res2 = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log("res2", res2.data);
    }
    getData();
  }, []);





  return (
    <>
        {data &&
        data.map((dat, index) => {
          return <p key={index}>{dat.title}</p>;
        })}

    </>
  );
}

export default Fetch;

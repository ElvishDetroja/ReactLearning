import { useState, useRef } from "react";

function Form() {
  //
  const [name, setName] = useState("john");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [details, setDetails] = useState();

  const saveData = useRef();

  function handleChange(e) {
    const result = e.target.value.toUpperCase();
    setName(result);
  }

  function handleChange2(e) {
    if (e.target.name == address1) {
      setAddress1(e.target.value);
      console.log("address1", address1);
    } else {
      setAddress2(e.target.value);
      console.log("address2", address2);
    }
  }

  function saveD(e) {
    e.preventDefault();
    console.log("saveData", saveData.current.value);
  }

  function store(e) {
    setDetails({...details, [e.target.name]: e.target.value})
    console.log(details);
  }

  return (
    <>
      <form action="">

        {/* <input type="text" value="john" /> */}

        {/* <input type="text" value={name} /> */}

        {/* <input type="text" defaultValue="john" /> */}

        {/* <input type="text" onChange={(e)=>{setName(e.target.value)}} /> */}

        {/* <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> */}

        {/* <input type="text" value={name} onChange={handleChange} /> */}

        {/* <input type="text" name={address1} onChange={handleChange2} /> */}
        {/* <input type="text" name={address2} onChange={handleChange2} />  */}

        {/* <input type="text" ref={saveData} /> */}
        {/* <button onClick={saveD}>SUBMIT</button> */}

        {/* <input type="text" name="firstName" onChange={store} /> */}
        {/* <input type="text" name="lastName" onChange={store} /> */}


      </form>
    </>
  );
}

export default Form;

// controlled component controlled by react. in this, we use event Handlers and useState.
// uncontrolled component controlled by DOM. in this, we use useRef Hook.

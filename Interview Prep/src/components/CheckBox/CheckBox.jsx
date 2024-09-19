import React, { useState } from "react";

const CheckBox = () => {
//   const arr = ["India", "Pakistan", "USA"];

    const [arr, setArr] = useState([
        {name: "India", checked: false},
        {name: "Pakistan", checked: false},
        {name: "USA", checked: false},
    ])

  const handlecheck = (index) =>{
    arr[index].checked = !arr[index].checked; 
    setArr([...arr]);
  }

  const handleDelete = (index) =>{
    arr.splice(index,1);
    setArr([...arr]);
  }


  return (
    <div>
      This is checkbox <br />
      <ul style={{ listStyle: "none" }}>
        {arr.map((country, index) => (
            <div key={index} style={{display:"flex"}} >
                <input type="checkbox" name="" id="" onClick={() => handlecheck(index)} checked={country.checked}/>
                <li>{country.name}  {" "} {country.checked ? <span onClick={() => handleDelete(index)}>❌</span> : "" }</li>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default CheckBox;

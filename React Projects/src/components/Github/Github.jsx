import React, { useEffect, useState } from 'react'
import "./Github.css";

// https://api.github.com/users/${username}


const Github = () => {
    const [data, setData] = useState([])

    const fetchUser = async (username) =>{
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = response.json();
        setData(data);
        console.log(data);
    }

    useEffect(()=>{
        fetchUser("Sanmit0804");
    },[])
  return (
    <div className='container'>
      Github
      {data.name}
    </div>
  )
}

export default Github

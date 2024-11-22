import React, { useEffect, useState } from 'react'

export default function Data() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:9000/getdata")
    .then((res)=>res.json())
    .then((val)=>{
      setData(val);
      console.log(val);
      
    })
    .catch((err)=>console.error("Unable to fetch",err))
  })
  return (
    <table class="table">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Place</th>
    </tr>
  </thead>
  <tbody>
    {
      data && data.length>0
      && data.map((value)=>{
        return(
    <tr>
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.age}</td>
      <td>{value.palce}</td>
    </tr>
        )
      })
    }
  </tbody>
</table>
  )
}

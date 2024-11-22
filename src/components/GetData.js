import React, { useRef } from 'react'

export default function GetData() {
  var x1 = useRef()
  var x2 = useRef()
  var x3 = useRef()
  var i1 = useRef()
  function f1(){
    var data  = {
      id : i1.current.value,
      name:x1.current.value,
      age:x2.current.value,
      palce:x3.current.value,
    }
    data = JSON.stringify(data)
    console.log(data);

    fetch("http://localhost:9000/addData",{
      method:"POST",
      body:data,
      headers:{"content-type":"application/json"}
    }).then((val)=>{
      console.log(val);
     alert("data submit")
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
    
  }
  return (
    <div>
      <input type='text' ref={i1}/> <br/>
      <input type='text' ref={x1}/> <br/>
      <input type='text' ref={x2}/> <br/>
      <input type='text' ref={x3}/> <br/>
      <button onClick={f1}>Submit</button>
    </div>
  )
}

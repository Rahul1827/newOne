import React, { useRef } from 'react'

export default function Update() {
    var x1 = useRef();
    var x2 = useRef();
    var x3 = useRef();
    var x4 = useRef();
    function f1(){
        var data = {
            
            name:x2.current.value,
            age:x3.current.value,
            palce:x4.current.value
        }
        data = JSON.stringify(data)
        console.log(data);
        
    
    fetch(`http://localhost:9000/update/${x1.current.value}`,
        {
            method:"PUT",
            body:data,
            headers:{"content-type":"application/json"}
        }
    )
    .then((res)=>{
        console.log(res);
        alert("delted ")
        
    }).catch((err)=>{
        console.log(err);
        
    })
}
  return (
    <div>
      <input type='text' ref={x1}/> <br/>
      <input type='text' ref={x2}/> <br/>
      <input type='text' ref={x3}/> <br/>
      <input type='text' ref={x4}/> <br/>
      <button onClick={f1}>Update</button>
    </div>
  )
}

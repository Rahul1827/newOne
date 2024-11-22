import React, { useRef } from 'react'

export default function DeleteData() {
    var x1 = useRef();

    function f1(){
        var data = {
            pid:x1.current.value,
        }
        data = JSON.stringify(data);
        console.log(data);

        
        fetch(`http://localhost:9000/delete/${x1.current.value}`,{
            method:"DELETE"
        }).then((val)=>{
            console.log(val);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }
  return (
    <div>
      <input type='text' ref={x1}/><br>
      </br>
      <button onClick={f1}>Delete</button>
    </div>
  )
}

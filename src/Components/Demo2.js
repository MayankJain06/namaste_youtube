import React, { useRef, useState, useEffect } from 'react'

const Demo2 = () => {
    let x=10;
    const ref =useRef(0);
    
    let [y,setY] =useState(0);
    const i=useRef(null);
    useEffect(()=>{
       i.current =setInterval(()=>{
            console.log("Namaste React", Math.random());
        },1000);
        // return ()=>clearInterval(i.current);
    },[]);
  return (
    <div className="m-4 p-2 bg-slate-50 border  border-black w-96 h-96">
        <div>
            <button className="m-4 px-2 border border-black bg-green-100"onClick={()=>{
                x++;
                console.log(x);
            }}>Increase X</button>
        <span className="font-bold text-xl">
            Let ={x}
        </span>
        </div>
        <div>
            <button className="m-4 px-2 border border-black bg-green-100"onClick={()=>{
                setY(y++);
                console.log(y);
            }}>Increase Y</button>
        <span className="font-bold text-xl">
            State ={y}
        </span>
        </div>
        <div>
            <button className="m-4 px-2 border border-black bg-green-100"onClick={()=>{
                ref.current=ref.current+1;
                console.log( "Ref:" +ref.current);
            }}>Increase Ref</button>
        <span className="font-bold text-xl">
            Ref ={ref.current}
        </span>
        </div>
        <button className="bg-red-900 p-4 m-4 text white font-bold rounded-lg" onClick={()=>{
            clearInterval(i.current);
        }}>Stop Printing</button>
    </div>
  );
};

export default Demo2;
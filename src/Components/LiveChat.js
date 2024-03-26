import React, { useEffect,useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName,makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage,setLiveMessage] =useState("");
  const dispatch =useDispatch();
  const chatMessages = useSelector((store)=>store.chat.messages);
  useEffect(()=>{
    const i =setInterval(()=>{
      dispatch(addMessage({
        name:generateRandomName(),
        message:makeRandomMessage(25),
      }))
    },1500);
    return ()=> clearInterval(i);
  },[]);
  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      <div>
      {
      //Dont use Index as keys
      chatMessages.map((c,i)=>(
      <ChatMessage key={i} name={c.name} message={c.message}/>
      ))
      }
      </div>
    </div>
     <form className="w-full ml-2 p-2 border border-black flex" onSubmit={(e)=>{
      e.preventDefault();
      console.log("ON Form Submit", liveMessage);
      dispatch(addMessage({
        name:"Mayank Jain",
        message:liveMessage,
      }))
      setLiveMessage("");
     }}>
     <input className="px-2 w-96" type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value);}}></input>
     <button className="px-2 mx-2 bg-green-100">Send</button>
   </form>
   </>
  );
};

export default LiveChat
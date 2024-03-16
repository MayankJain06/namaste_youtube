import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = ()=>{
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store)=>store.search);
    

    useEffect(()=>{
        
        const timer =setTimeout(()=> {
        if(searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery]);
        } else{
            getSearchSuggestions();
        }
    },200);  
        return () =>{
            clearTimeout(timer);
        };
    },[searchQuery]);
    

    const getSearchSuggestions =async () =>{
        console.log("API CALL -"+searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log(json);
        setSuggestions(json[1]);

        // Updating the cache
        dispatch(cacheResults({
            [searchQuery] : json[1],
        }));
    };

    const dispatch = useDispatch();
    const toggleHandler =()=>{
        dispatch(toggleMenu());
    };
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
           <div className="flex col-span-1">
            <img onClick={()=>{toggleHandler()}}  className="h-8 cursor-pointer" alt="hamberger-menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"></img>
            <a href="/">
            <img className=" mx-2 h-8" alt="youtube-logo" src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"></img>
            </a>
           </div>
           <div className="col-span-10 px-10">
            <div>
            <input 
            placeholder="Search"
            value={searchQuery} 
            onChange={(e)=> setSearchQuery(e.target.value)} 
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" 
            type="text">
            </input>
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
            </div>
            {showSuggestions &&( <div className="absolute bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100">
                <ul>
                    {suggestions.map(s=> <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍{s}</li>)}
                </ul>
            </div> )}
           </div>
           <div className="col-span-1">
            <img className="h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
           </div>
        </div>
    )
};

export default Head;
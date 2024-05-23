import React, { useState } from "react";
import {FcLike} from "react-icons/fc";import { toast } from "react-toastify";
;
// import { IconNa } from "react-icons/fc";
function Card(prop) {
    let data=prop.allData;
    const[like,setLike]=useState(false);
    // console.log(data)

    let likedCoureces=prop.likedCoureces;
    let setLikedCources=prop.setLikedCources
function clickHandler(){

  if(likedCoureces.includes(data.id)){
    setLikedCources((prev)=>prev.filter((cid)=>(cid!==data.id)));
    toast.error("Liked removed ")
  }
  else{
    
    if(likedCoureces.length==0)
      setLikedCources([data.id]);
    else
      setLikedCources((prev)=>[...data.id]);
    toast.success("liked Added")
  }
  console.log(likedCoureces)
}

    function addLike(){

      if(!like)
        toast.success("Liked succesfully")
      else
        toast("Dislike Succesfully");
      
        setLike(!like);
    }
  return (
    <div className="mt-5 w-60  bg-slate-500">
      <div className="">
        <img  className="" src={data.image.url} alt="Image loading"/>
        
        </div>
        <div className="relative">
     <div className="absolute mr-5 mt-[-18px] ml-1" >
     <button >
        <FcLike fontSize="1.75rem" onClick={clickHandler} />
     </button>
     </div>
     </div>
      <div className="p-2">
        <p className="text-2xl mb-3">{ data.title}</p>
            <p className="">{
              data.description.length >50 ? ( data.description.substr(0,100)+"..." ):(data.description)
            }</p>
      </div>

      
    </div>
  );
}

export default Card;

import React, { useState } from 'react'
import Card from './Card';
const  Cards=(pros)=> {
  let courses=pros.courses;
let category=pros.category

  const singleArray = [].concat(...Object.values(courses));
  // console.log(singleArray)
  const[likedCoureces,setLikedCources]=useState([]);

  console.log(category)

  function getCources(params) {
    console.log(category)
    if(category==="All"){
    let allCoureces=[]
    Object.values(courses).forEach(array=>{
      array.forEach(courceData =>{
        allCoureces.push(courceData);
      })

    })
    return allCoureces;
  }else{
   return courses[category]
  }
  
}
const c=getCources();
  return (

   
    <div className=' flex flex-wrap align-middle justify-center space-x-5 '>
    {/* <div className=' sm:grid gap-4  grid-rows-3  md:gap-4 grid-cols-3 grid-rows-3  xl:grid gap-4 grid-cols-3 grid-rows-3 align-middle justify-center'> */}
    {
     c.map((data)=>(
        <Card key={courses.id} allData={data} likedCoureces={likedCoureces}setLikedCources={setLikedCources}></Card>
      ))
    }
   
    </div>
  )
}

export default Cards 
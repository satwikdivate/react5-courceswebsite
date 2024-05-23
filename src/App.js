import React, { useEffect, useState } from "react";
import Navbar from "./componenets/Navbar"
import Filter from "./componenets/Filter"
import Cards from "./componenets/Cards"
import Spinner from "./componenets/Spinner";
// import{apiUrl,filterData} from "./data"
import { toast } from "react-toastify";
import {filterData,apiUrl} from "./data"

const App = () => {

  const [courses,setCourse ]=useState(null)
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title)

  async function fetchData(){
    setLoading(true);
    try{

      let response=await fetch(apiUrl);
      let data= await response.json();
      setCourse(data.data);
      // console.log(data.data)
    }catch(err){
      return(
        <p>Error occured</p>
      

      );
toast.error("error occured")
    }

    setLoading(false)
    toast.success("Data Loaded Succefully")
  }

  useEffect(()=>{
    // fetching data from url
fetchData()
  },[]  )

    return(
     
      <div>
        <div>
          <Navbar/>
        </div>

        <div className="bg-slate-700 text-center">
        <div>
         <Filter fetchdata={filterData} category={category} setCategory={setCategory}/>
        </div>
        <div>
        {
          loading ?<Spinner></Spinner>:<Cards courses={courses} category={category}></Cards>
        }
               {/* <Cards/> */}
        </div>

        </div>
      </div>
    )
};

export default App;


// error handling of 404
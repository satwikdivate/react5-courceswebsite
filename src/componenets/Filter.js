import React from 'react'

function Filter(prop) {
   
    let fetch=prop.fetchdata;
    let category=prop.category;
    let setCategory=prop.setCategory;

    function filterHandeler(title){
        setCategory(title);
        // alert("hii")

    }

    return(
        <div className='bg-slate-700 text-center text-white space-x-5 '>
            {
                fetch.map((data)=>(
                    <button
                    onClick={()=>filterHandeler(data.title)}>{data.title}</button>
                ))
            }
    
        </div>
    )
    
  
}

export default Filter
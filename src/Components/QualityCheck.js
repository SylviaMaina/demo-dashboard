import React from 'react'
function Quality(){
    const quality=50
    let level="";
             if(quality>=70){
              level='Gold'  
           }
                   else if(quality>=60){
                       level='Silver'
                   }
                           else if(quality>=40){
                               level='Bronze'
                           }
                                   else{
                                      level={quality}
                                   }
   return(
           <div>
           <h1>Quality level </h1>
           <h2>{quality}</h2>
                   <h2>{level}</h2>
          
                                   </div>
            )
}
export default Quality



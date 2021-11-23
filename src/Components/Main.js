import React from 'react'
import Pay from './pay'
import BarChart from './barChart'
import Active from './active'
import Quality from './QualityCheck'

function Main(){
    return(
            <section >
    <div className="start">
     <div className="intro">
            <h1>Welcome back,Sylvia!</h1>
            <p>Complete your profie to gain more access to projects.</p>
     </div >
     <div className="projects">
            <Active />
      </div>
     </div>
     <div className="data">
     <div className="graph">
            <BarChart />
     </div>
      <div className="pay">
            <Pay 
            current="$0.69"
            prev="$0.54"
            prev1="$0.22"
            prev2="$7.72"
            />
     </div>
     </div>
            <div>
            <h2>Project quality</h2>
            <Quality />
            </div>
            </section>
            );
}
export default Main


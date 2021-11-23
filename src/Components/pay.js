import React from "react"
function Pay(props){
    return(
            <div>
    <h1>PAYMENT HISTORY</h1>
    <h1>Pending payment:{props.current}</h1>
    <p>Recent Payouts:{props.prev}</p>
    <p>Recent Payouts:{props.prev1}</p>
    <p>Recent Payouts:{props.prev2}</p>
    </div>
            )
}
export default Pay


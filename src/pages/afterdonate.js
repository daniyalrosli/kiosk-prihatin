import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Thankyou() {
    
    return (
        
        <Fragment>

            <div className="tq-heading">
                
                <div className="tqsm">
                    <img src=""></img>
                    <h3>Thank you for your donation</h3>
                   <center> <Link to="/">
  <button type="button">Home</button>
</Link></center>

                </div>
        </div>



        </Fragment>
    )
}
export default Thankyou;
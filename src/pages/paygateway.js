import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Pay() {

    return (
        
        <Fragment>


            <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/css/style.css" />
  <title>Payment Form</title>
  <div className="container">
    <form action="#">
      <div className="row">
        <div className="col">
          <h3 className="title">Billing Address</h3>
          <div className="inputBox">
            <span>Full Name :</span>
            <input type="text" placeholder="Sunny Roy" />
          </div>
          <div className="inputBox">
            <span>Email :</span>
            <input type="email" placeholder="example@example.com" />
          </div>
          <div className="inputBox">
            <span>Address :</span>
            <input type="text" placeholder="room - street - locality" />
          </div>
          <div className="inputBox">
            <span>City :</span>
            <input type="text" placeholder="mumbai" />
          </div>
          <div className="flex">
            <div className="inputBox">
              <span>State :</span>
              <input type="text" placeholder="India" />
            </div>
            <div className="inputBox">
              <span>Zip Code :</span>
              <input type="number" placeholder="123 456" />
            </div>
          </div>
        </div>
        <div className="col">
          <h3 className="title">Payment</h3>
          <div className="inputBox">
            <span>Cards Accepted :</span>
            <img src="/images/card_img.png" alt="" />
          </div>
          <div className="inputBox">
            <span>Name On Card:</span>
            <input type="text" placeholder="Sunny Roy" />
          </div>
          <div className="inputBox">
            <span>Credit card number :</span>
            <input type="number" placeholder="1111-2222-3333-4444" />
          </div>
          <div className="inputBox">
            <span>Exp Month :</span>
            <input type="text" placeholder="january" />
          </div>
          <div className="flex">
            <div className="inputBox">
              <span>Exp Year :</span>
              <input type="number" placeholder={2022} />
            </div>
            <div className="inputBox">
              <span>CVV :</span>
              <input type="number" placeholder={1234} />
            </div>
          </div>
        </div>
      </div>
      
      <Link to="/thankyou">
  <button type="button">Submit</button>
</Link>
    </form>
  </div>
</>



        </Fragment>
    )
}

export default Pay;
import React, { Fragment } from "react";


function Donate() {
    
    return (
        
        <Fragment>

 <form method="post" action="//submit.form" onsubmit="return validateForm();">
  <div style={{ maxWidth: 400 }}></div>
  <div style={{ paddingBottom: 18, fontSize: 24 }}>Let's Donate</div>
  <div style={{ display: "flex", paddingBottom: 18, maxWidth: 550 }}>
    <div style={{ marginLeft: 0, marginRight: "1%", width: "49%" }}>
      First name
      <br />
      <input
        type="text"
        id="data_2"
        name="data_2"
        style={{ maxWidth: "100%" }}
        className="form-control"
      />
    </div>
    <div style={{ marginLeft: "1%", marginRight: 0, width: "49%" }}>
      Last name
      <br />
      <input
        type="text"
        id="data_3"
        name="data_3"
        style={{ maxWidth: "100%" }}
        className="form-control"
      />
    </div>
  </div>
  <div style={{ paddingBottom: 18 }}>
    Email
    <br />
    <input
      type="text"
      id="data_4"
      name="data_4"
      style={{ maxWidth: 550 }}
      className="form-control"
    />
  </div>
  <div style={{ paddingBottom: 18 }}>
    Donation Amount<span style={{ color: "red" }}> *</span>
    <br />
    <span>
      <input type="radio" id="data_5_0" name="data_5" defaultValue="$50" /> $50
    </span>
    <br />
    <span>
      <input type="radio" id="data_5_1" name="data_5" defaultValue="$100" />{" "}
      $100
    </span>
    <br />
    <span>
      <input type="radio" id="data_5_2" name="data_5" defaultValue="$250" />{" "}
      $250
    </span>
    <br />
    <span>
      <input type="radio" id="data_5_3" name="data_5" defaultValue="$500" />{" "}
      $500
    </span>
    <br />
  </div>
  <div style={{ paddingBottom: 18 }}>
    Full Address
    <br />
    <textarea
      id="data_6"
      false=""
      name="data_6"
      style={{ maxWidth: 550 }}
      rows={3}
      className="form-control"
      defaultValue={""}
    />
  </div>
  <div style={{ paddingBottom: 18 }}>
    <input name="skip_Submit" defaultValue="proceed to payment" type="submit" />
  </div>
  <div>
    <div style={{ float: "right" }}>
      <a href="https://www.100forms.com" id="lnk100" title="form to email">
        form to email
      </a>
    </div>
  </div>
</form>



        </Fragment>
    )
}

export default Donate;
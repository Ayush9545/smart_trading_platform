import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h3>The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row-1 col-4 p-3 mt-5">
          <img src="media/images/zerodhafundhouse.png" style={{width:"50%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="row-1 col-4 p-3 mt-5">
          <img src="media/images/sensibull-logo.svg" style={{width:"70%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="row-1 col-4 p-3 mt-5">
          <img src="media/images/tijori.svg" style={{width:"40%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="row-2 col-4 p-3 mt-5">
          <img src="media/images/streak-logo.png" style={{width:"40%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="row-2 col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{width:"50%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="row-2 col-4 p-3 mt-5">
          <img src="media/images/ditto-logo.png" style={{width:"30%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="col-6">
        <h4>404</h4>
        <h1>Kiaan couldn't find that page</h1>
        <h5>
          We couldn't find the page you were looking for. Visit{" "}
          <a className="underline" href="/">
            Zerodha's home page
          </a>
        </h5>
      </div>

      <div className="col-6">
        <img class="kiaan-404" src="media/images/Screenshot3.png " alt="Kiaan-404"/>
      </div>
    </div>
  );
}

export default NotFound;
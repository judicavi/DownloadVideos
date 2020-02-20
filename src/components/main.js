import React from "react";
import NavBar from "./navBar";

const Main = () => (
  <React.Fragment>
    <NavBar />
    <div className="container w-100 h-100 pt-5">
      <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-start">
        <h1>Video Download</h1>
        <div className="form-group row">
          <label>Link del video</label>
          <input
            placeholder="Ingrese el link aquí"
            className="form-control"
          ></input>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Main;

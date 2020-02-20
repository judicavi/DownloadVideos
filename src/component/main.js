import React from "react";
import Bar from "./bar";

const Main = props => {
  return (
    <React.Fragment>
      <Bar />
      <div className="container h-100 w-100">
        <div className="d-flex flex-column align-items-center justify-content-start h-100 w-100 pt-5">
          <h1>Video Download</h1>
          <div className="form-group w-50">
            <input
              className="form-control"
              placeholder="Ingrese el link aquí"
            ></input>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;

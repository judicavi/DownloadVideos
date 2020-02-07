import React from "react";
import Bar from "./bar";

const Main = props => {
  return (
    <React.Fragment>
      <Bar />
      <div className="container w-100 h-100">
        <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
          <h1>Descargar videos</h1>
          <div className="form-group">
            <label>Link del video</label>
            <input
              placeholder="Nombre del video"
              className="form-control"
            ></input>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;

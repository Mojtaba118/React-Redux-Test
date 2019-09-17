import React from "react";

const Main = props => {
  return (
    <React.Fragment>
      <h2>User Information</h2>
      <button onClick={props.changeUsername} className="btn btn-primary">
        Change Your Username
      </button>
    </React.Fragment>
  );
};

export default Main;

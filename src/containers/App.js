import React from "react";
import { connect } from "react-redux";
import Main from "../components/main";
import User from "../components/user";
import { setNameAction } from "../actions/userActions";

function App(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Main changeUsername={() => props.setName("Mojtaba")} />
          <User username={props.user.username} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setNameAction(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

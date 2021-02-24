import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Common/Header";
import Register from "./Register";
import "./Common/Style.css";

const connectedProps = (state) => ({

});

const connectionActions = {

}


var connector = connect(connectedProps, connectionActions);


class Poc extends React.Component {

  render() {
    return <div>
      <Header/>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/register"} component={Register} />
      </Switch>
    </div>
  }
}

export default connector(compose(

)(Poc));
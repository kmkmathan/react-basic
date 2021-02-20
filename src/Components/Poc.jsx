import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";


const connectedProps = (state) => ({

});

const connectionActions = {

}


var connector = connect(connectedProps, connectionActions);


class Poc extends React.Component {

  render() {
    return <div>
      <Switch>
        <Route exact path={"/"} component={Login} />
        <Route exact path={"/register"} component={Register} />
      </Switch>
    </div>
  }
}

export default connector(compose(

)(Poc));
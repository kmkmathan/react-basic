import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/index";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Register from "./Register";
import "../assets/styles/Style.css";

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
      <Footer/>
    </div>
  }
}

export default connector(compose(

)(Poc));
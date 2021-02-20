import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import {register} from "redux/register/action";
import styled from 'styled-components/macro';

const connectedProps = (state) => ({
    isProgress:state.register.isProgress,
    error:state.register.error,
    success:state.register.success,
    registerValue: state.register.registerValue
});

const connectionActions = {
    register:register
}


var connector = connect(connectedProps, connectionActions);



export const RegisterWrapper = styled.div`
  line-height: 2rem;
  color: ${(props) => props.color};
  font-family: inherit;
  font-size: 1.6rem;
  line-height: 2.8rem;
  font-weight: 400;
  max-width: 700px;

`;
const Register = (props) => {
    return (
      <RegisterWrapper color={props.color}>
        {props.registerValue}
      </RegisterWrapper>
    );
  };
export default connector(compose(
    withRouter,
)(Register));



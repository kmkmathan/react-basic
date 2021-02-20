import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import styled from 'styled-components/macro';

export const LoginWrapper = styled.div`
  line-height: 2rem;
  color: ${(props) => props.color};
  font-family: inherit;
  font-size: 1.6rem;
  line-height: 2.8rem;
  font-weight: 400;
  max-width: 700px;

`;


const connectedProps = (state) => ({
    isProgress:state.register.isProgress,
    error:state.register.error,
    success:state.register.success,
});

const connectionActions = {
}


var connector = connect(connectedProps, connectionActions);



const Login = (props) => {

  return (
    <LoginWrapper color={props.color}>
      Login
    </LoginWrapper>
  );
};

export default connector(compose(
    withRouter,
)(Login));



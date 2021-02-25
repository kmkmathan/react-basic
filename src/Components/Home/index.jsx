import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import styled from 'styled-components/macro';
import Banner from './Banner';
import RecruitTeam from './RecruitTeam';
import Benefit from './Benefit';
import Relevant from './Relevant';


export const HomeWrapper = styled.div`
  color: ${(props) => props.color};
`;

const connectedProps = (state) => ({
    isProgress:state.register.isProgress,
    error:state.register.error,
    success:state.register.success,
});

const connectionActions = {
}

var connector = connect(connectedProps, connectionActions);

const Home = (props) => {

  return (
    <HomeWrapper color={props.color}>
         <section id="uxg-content">
            <Banner/>
            <RecruitTeam/>
            <Benefit/>
            <Relevant/>
         </section>
    </HomeWrapper>
  );
};

export default connector(compose(
    withRouter,
)(Home));



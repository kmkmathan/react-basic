import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import Banner from './Banner';
// import RecruitTeam from './RecruitTeam';
// import Benefit from './Benefit';
// import Relevant from './Relevant';

const connectedProps = (state) => ({
    isProgress:state.register.isProgress,
    error:state.register.error,
    success:state.register.success,
});

const connectionActions = {
}

var connector = connect(connectedProps, connectionActions);

const OffShore = (props) => {

  return (
         <section id="uxg-content">
            <Banner/>
            {/* <RecruitTeam/>
            <Benefit/>
            <Relevant/> */}
         </section>
  );
};

export default connector(compose(
    withRouter,
)(OffShore));



import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import recruitTeam__icon from 'assets/images/recruitTeam__icon.svg';
import remoteAssistance__icon from 'assets/images/remoteAssistance__icon.svg';
import timebased__icon from 'assets/images/timebased__icon.svg';

const connectedProps = (state) => ({
    isProgress:state.register.isProgress,
    error:state.register.error,
    success:state.register.success,
});

const connectionActions = {
}

var connector = connect(connectedProps, connectionActions);

const RecruitTeam = (props) => {

  return (
    <div class="uxgbnrbtm">
        <div class="uxgbnrbtm__inner">
            <div class="uxgbnrbtm__infosctn">
                <div class="uxgbnrbtm__infosctnlist">
                    <a class="uxgbnrbtm__infosctnlink" href="javascript:void(0);" title="Hire less or more developers"></a>
                    <img class="uxgbnrbtm__infosctnimg" src={recruitTeam__icon} alt="Hire less or more developers"/>
                    <div class="uxgbnrbtm__infosctncontent">
                        <h4 class="uxgbnrbtm__infosctnttl">Recruit Team</h4>
                        <p class="uxgbnrbtm__infosctndesc">A fast paced setup to quickly onboard talent with wide pool of expertise</p>
                    </div>
                </div>
                <div class="uxgbnrbtm__infosctnlist">
                    <a class="uxgbnrbtm__infosctnlink" href="javascript:void(0);" title="Project on track"></a>
                    <img class="uxgbnrbtm__infosctnimg" src={remoteAssistance__icon} alt="Project on track"/>
                    <div class="uxgbnrbtm__infosctncontent">
                        <h4 class="uxgbnrbtm__infosctnttl">Remote Assistance</h4>
                        <p class="uxgbnrbtm__infosctndesc">All our employees could work in remote environment seamlessly</p>
                    </div>
                </div>
                <div class="uxgbnrbtm__infosctnlist">
                    <a class="uxgbnrbtm__infosctnlink" href="javascript:void(0);" title="Meet business peaks"></a>
                    <img class="uxgbnrbtm__infosctnimg" src={timebased__icon} alt="Meet business peaks"/>
                    <div class="uxgbnrbtm__infosctncontent">
                        <h4 class="uxgbnrbtm__infosctnttl">Full time or Hour based</h4>
                        <p class="uxgbnrbtm__infosctndesc">Based on business needs, we provide full time or hourly based recruitment services.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default connector(compose(
    withRouter,
)(RecruitTeam));




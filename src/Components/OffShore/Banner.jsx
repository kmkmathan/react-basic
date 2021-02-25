import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import image from 'assets/images/odc__bannerimg.svg';

const connectedProps = (state) => ({
    isProgress:state.register.isProgress,
    error:state.register.error,
    success:state.register.success,
});

const connectionActions = {
}

var connector = connect(connectedProps, connectionActions);

const Banner = (props) => {

  return (
       
    <div class="uxgbanner bg-grdnt--white">
    <div class="uxgbanner__inner">
        <div class="uxgbanner__left">
            <h2 class="uxgbanner__heading">
                Offshore Development center
            </h2>
            <p class="uxgbanner__info">
                Would you be surprised if we tell you that you can lessen your development cost with better software quality? Well, it is possible and it can be done by having an Offshore Development Center (ODC).
            </p>
            <button class="btn">
                Get in Touch
            </button>
        </div>
        <img class="uxgbanner__img pos-tp--0" src={image} alt="UXGURUS"/>
    </div>
</div>
  );
};

export default connector(compose(
    withRouter,
)(Banner));



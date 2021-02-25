import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import image from 'assets/images/recruit__bannerimg.svg';

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
       
            <div className="uxgbanner bg-grdnt--white">
                <div className="uxgbanner__inner">
                    <div className="uxgbanner__left">
                        <h2 className="uxgbanner__heading">
                            Recruitment India &amp Abroad
                        </h2>
                        <p className="uxgbanner__info">
                            Whether its full-time recruitments, partnership or ongoing management support, we cater to all your needs. Truthfulness, transparency and collaborative approach is a start!
                        </p>
                        <button className="btn">
                            Get in Touch
                        </button>
                    </div>
                    <img className="uxgbanner__img pos-tp--0" src={image} alt="UXGURUS" />
                </div>
            </div>
  );
};

export default connector(compose(
    withRouter,
)(Banner));



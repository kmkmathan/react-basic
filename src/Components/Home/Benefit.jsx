import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import expStaff__icon from 'assets/images/expStaff__icon.svg';
import directAccess__icon from 'assets/images/directAccess__icon.svg';
import intelCopy__icon from 'assets/images/intelCopy__icon.svg';

const connectedProps = (state) => ({
    isProgress:state.register.isProgress,
    error:state.register.error,
    success:state.register.success,
});

const connectionActions = {
}

var connector = connect(connectedProps, connectionActions);

const Benefit = (props) => {

  return (
       <div class="uxghirebnfts">
			<div class="uxghirebnfts__inner">
				<h3 class="uxghirebnfts__heading">RECRUITMENT BENEFITS</h3>
				<h4 class="uxghirebnfts__subheading">What you will get?</h4>
				<div class="uxghirebnfts__cnt">
					<div class="uxghirebnfts__cntblck">
						<img class="uxghirebnfts__icon" src={expStaff__icon} alt="Trusted &amp; Skilled Developers"/>
						<h5 class="uxghirebnfts__cnttitle">Experienced staff</h5>
						<p class="uxghirebnfts__cntdesc">Most of the resources at UXGURUS have a minimum 3+ years of relevant working experience.</p>
					</div>
					<div class="uxghirebnfts__cntblck">
						<img class="uxghirebnfts__icon" src={directAccess__icon}  alt="No recruitment headache"/>
						<h5 class="uxghirebnfts__cnttitle">Direct access to resources</h5>
						<p class="uxghirebnfts__cntdesc">You are in direct contact with your resources and have full flexibility and control over them.</p>
					</div>
					<div class="uxghirebnfts__cntblck">
						<img class="uxghirebnfts__icon" src={intelCopy__icon}  alt="Integrity &amp; Transparency"/>
						<h5 class="uxghirebnfts__cnttitle">Intellectual copyrights</h5>
						<p class="uxghirebnfts__cntdesc">All the codes and work done by resources assigned to a particular client will be reserved by the client.</p>
					</div>
				</div>
			</div>
			<div class="uxghirebnfts__btm"></div>
		</div>
  );
};

export default connector(compose(
    withRouter,
)(Benefit));

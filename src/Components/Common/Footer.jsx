import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import styled from 'styled-components/macro';
import logo__3x from 'assets/images/logo__3x.png';
import logo__2x from 'assets/images/logo__2x.png';
import logo__1x from 'assets/images/logo__3x.png';

const connectedProps = (state) => ({
    header:state.common.header,
});

const connectionActions = {
}


var connector = connect(connectedProps, connectionActions);


const Footer = (props) => {
  return (
<footer class="uxgfooter">
		<div class="uxgfooter__inner">
			<div class="uxgfooter__blocks">
				<h6 class="uxgfooter__logo">
					<a class="uxgfooter__logolink" href="index.html" title="UXGURUS">
						<picture>
							<source media="(min-width: 1200px)" srcset={logo__3x}/>
							<source media="(min-width: 960px)" srcset={logo__2x}/>
							<source media="(min-width: 560px)" srcset={logo__1x}/>
							<img class="uxgfooter__logoimg" src={logo__1x} alt="UXGURUS"/>
						</picture>
					</a>
				</h6>
				<p class="uxgfooter__address">
					#32, 4th Floor, 6th Main,&nbsp; Horamavu Main Road,
					Easy Bazar,&nbsp;Banaswadi,&nbsp; Bengaluru, Karnataka &nbsp; &nbsp; &nbsp; (560 043)
				</p>
			</div>
			<div class="uxgfooter__blocks">
				<h6 class="uxgfooter__heading">
					Contact us
				</h6>
				<ul class="uxgfooter__linklistcont">
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="javascript:void(0);" title="+91-9892834546">
							<span class="uxgfooter__icon uxgfooter--callicon"></span>
							+91-9892834546
						</a>
					</li>
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="javascript:void(0);" title="yourmailid@gmail.com">
							<span class="uxgfooter__icon uxgfooter--mailicon"></span>
							yourmailid@gmail.com
						</a>
					</li>
				</ul>
			</div>
			<div class="uxgfooter__blocks">
				<h6 class="uxgfooter__heading">
					Follow us
				</h6>
				<ul class="uxgfooter__linklistcont">
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="javascript:void(0);" title="LinkedIn">
							<span class="uxgfooter__icon uxgfooter--lkinicon"></span>
							LinkedIn
						</a>
					</li>
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="javascript:void(0);" title="Twitter">
							<span class="uxgfooter__icon uxgfooter--twicon"></span>
							Twitter
						</a>
					</li>
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="javascript:void(0);" title="Facebook">
							<span class="uxgfooter__icon uxgfooter--fbicon"></span>
							Facebook
						</a>
					</li>
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="javascript:void(0);" title="Instagram">
							<span class="uxgfooter__icon uxgfooter--instaicon"></span>
							Instagram
						</a>
					</li>
				</ul>
			</div>
			<div class="uxgfooter__blocks">
				<h6 class="uxgfooter__heading">
					Quick Links
				</h6>
				<ul class="uxgfooter__linklistcont">
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="index.html" title="Home">
							Home
						</a>
					</li>
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="javascript:void(0);" title="Recruitment">
							Recruitment
						</a>
					</li>
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="odc.html" title="ODC Services">
							ODC Services
						</a>
					</li>
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="hire-developer.html" title="Hire a Developer">
							Hire a Developer
						</a>
					</li>
				</ul>
				<ul class="uxgfooter__linklistcont">
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="javascript:void(0);" title="Blogs">
							Blogs
						</a>
					</li>
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="javascript:void(0);" title="Career">
							Career
						</a>
					</li>
					<li class="uxgfooter__linklist">
						<a class="uxgfooter__link" href="javascript:void(0);" title="About us">
							About us
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="uxgfooter__inner uxgfooter--secondfooter">
			<p class="uxgfooter__secondlink">Copyright @ UXGURUS 2015-2020</p>
			<p class="uxgfooter__secondlink mar-lt-25">
				<a class="uxgfooter__link" href="javascript:void(0);" title="Terms &amp; Conditions">
					Terms &amp; Conditions
				</a>
			</p>
			<p class="uxgfooter__secondlink">
				<a class="uxgfooter__link" href="javascript:void(0);" title="Privacy Policy">
					Privacy Policy
				</a>
			</p>
		</div>
	</footer>
  );
};

export default connector(compose(
    withRouter,
)(Footer));

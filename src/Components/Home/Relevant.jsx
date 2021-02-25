import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import blog__image1__1x from 'assets/images/blog__image1__1x.png';
import blog__image1__3x from 'assets/images/blog__image1__3x.png';
import blog__image1__2x from 'assets/images/blog__image1__2x.png';
import blog__image1__1xPng from 'assets/images/blog__image1__1x.png';
import blog__image2__1x from 'assets/images/blog__image2__1x.png';
import blog__image2__3x from 'assets/images/blog__image2__3x.png';
import blog__image2__2x from 'assets/images/blog__image2__2x.png';
import blog__image2__1xPng from 'assets/images/blog__image2__1x.png';


const connectedProps = (state) => ({
    isProgress:state.register.isProgress,
    error:state.register.error,
    success:state.register.success,
});

const connectionActions = {
}

var connector = connect(connectedProps, connectionActions);

const Relevant = (props) => {

  return (
       
        
<div class="uxgblogs bg--white">
			<div class="uxgblogs__inner">
				<div class="uxgblogs__left">
					<h4 class="uxgblogs__heading">LATEST BLOGS</h4>
					<h5 class="uxgblogs__subheading">Relevant Articles</h5>
					<button class="btn btn--trans">View More</button>
				</div>
				<div class="uxgblogs__rightparent">
					<div class="uxgblogs__right">
						<div class="uxgblogs__section">
							<a class="uxgblogs__link" href="javascript:void(0);" title="The top cost effective places for setting up the Offshore team"></a>
							<picture>
								<source media="(min-width: 1200px)" srcset={blog__image1__3x}/>
								<source media="(min-width: 960px)" srcset={blog__image1__2x}/>
								<source media="(min-width: 560px)" srcset={blog__image1__1xPng}/>
								<img class="uxgblogs__img" src={blog__image1__1x} alt="UXGURUS"/>
							</picture>
							<h6 class="uxgblogs__title">Outsourcing team</h6>
							<p class="uxgblogs__desc">The top cost effective places for setting up the Offshore team</p>
							<p class="uxgblogs__authoredby">Written By</p>
							<p class="uxgblogs__authorname">Kenny Subastian</p>
						</div>
						<div class="uxgblogs__section">
								<a class="uxgblogs__link" href="javascript:void(0);" title="10 collaborative tools used by successful virtual teams"></a>
							<picture>
								<source media="(min-width: 1200px)" srcset={blog__image2__3x}/>
								<source media="(min-width: 960px)" srcset={blog__image2__2x}/>
								<source media="(min-width: 560px)" srcset={blog__image2__1xPng}/>
								<img class="uxgblogs__img" src={blog__image2__1x} alt="UXGURUS"/>
							</picture>
							<h6 class="uxgblogs__title">future of work</h6>
							<p class="uxgblogs__desc">10 collaborative tools used by successful virtual teams</p>
							<p class="uxgblogs__authoredby">Written By</p>
							<p class="uxgblogs__authorname">KARTHICK RAJA</p>
						</div>
						<div class="uxgblogs__section">
								<a class="uxgblogs__link" href="javascript:void(0);" title="The top cost effective places for setting up the Offshore team"></a>
							<picture>
								<source media="(min-width: 1200px)" srcset={blog__image1__3x}/>
								<source media="(min-width: 960px)" srcset={blog__image1__2x}/>
								<source media="(min-width: 560px)" srcset={blog__image1__1xPng}/>
								<img class="uxgblogs__img" src={blog__image1__1x} alt="UXGURUS"/>
							</picture>
							<h6 class="uxgblogs__title">Outsourcing team</h6>
							<p class="uxgblogs__desc">The top cost effective places for setting up the Offshore team</p>
							<p class="uxgblogs__authoredby">Written By</p>
							<p class="uxgblogs__authorname">Shelby King</p>
						</div>
					</div>
				</div>
				{/* <div class="uxgblogs__arrowcont">
					<a class="uxgblogs__arrow uxgblogs--prevarrow" href="javascript:void(0);" title="Previous">Previous</a>
					<a class="uxgblogs__arrow uxgblogs--nextarrow" href="javascript:void(0);" title="Next">Next</a>
				</div> */}
			</div>
		</div>
  );
};

export default connector(compose(
    withRouter,
)(Relevant));



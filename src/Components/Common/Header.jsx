import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import styled from 'styled-components/macro';

export const HeaderWrapper = styled.div`

`;
const NavList = styled.li`
    margin: 0 24px;
    display: inline-block;
`;

const NavLink = styled.a`
text-decoration: none;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.55px;
color: var(--desc-text-color);
font-family: var(--uxg-semibold-font);
`;

const UxgheaderInner = styled.div`
	padding: 15px 0;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
    `


const connectedProps = (state) => ({
    header:state.common.header,
});

const connectionActions = {
}


var connector = connect(connectedProps, connectionActions);


const Header = (props) => {
  return (
    <HeaderWrapper color={props.color}>
        <header>
            <UxgheaderInner>
                <nav>
                    <ul>
                        { props.header.map((item, index) => <NavList key={index}>
                                <NavLink href="#" title={item.label}>{item.label}</NavLink>
                            </NavList> 
                        )} 
                        <NavList>
                            <button className="btn">Get Started</button>
                        </NavList>
                    </ul>
                </nav>
            </UxgheaderInner>
	    </header>
    </HeaderWrapper>
  );
};

export default connector(compose(
    withRouter,
)(Header));



import React from 'react';
import {
  Banner,
  LinkContainer,
  Logo,
  Navigation,
  StyledHeader,
  StyledLink,
} from './style';
import logo from '../../assets/hel-logo.svg'

const Header:React.FC = (props) => {
  return(
      <StyledHeader>
        <Navigation>
          <Banner>
            <Logo src={logo} alt="logo"/>
            <h1>Feedback System</h1>
          </Banner>
          <LinkContainer>
            <StyledLink to="/">Main</StyledLink>
            <StyledLink to="category">Category</StyledLink>
          </LinkContainer>
        </Navigation>
      </StyledHeader>
  )
};

export default Header;

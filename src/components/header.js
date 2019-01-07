import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.nav`
  width: 94%;
  border-bottom: 6px solid #f5696a;
  margin-left: 3%!important;
}
  .icon {
    margin-left:9%;
    width: 1.75rem;
    height: 23px;
    color: #7f888f;
  }
  `;

const MobileMenu = styled.div`
  position: relative;
  left: 0px;
  top: 60px;
  height: auto;
  width: 100%;
  background-color: red;
  z-index: 2;
  padding: 1rem;
  overflow: hidden;
  li {
    border-bottom: solid 1px white;
  }
  a {
    color: white;
  }
  a:hover {
    background-color: red;
  }
  .menu-list a {
    padding: 0 0.75em;
  }
`;
const NavbarBurger = styled.a`
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 600px) {
    float: left!important;
    margin-left: 12px;
    width: 1%;
    height: 16%!important;
    }
  }
`;
const Menu = styled.div`
  padding: 0;
`;
const Wrapper = styled.a`
  padding: 0
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      isActive: false,
    };
  }

  toggleMobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Container className="navbar is-transparent">
        <NavbarBurger className="navbar-brand is-pulled-left">
          <a
            role="button"
            className={isActive ? 'is-active navbar-burger' : 'navbar-burger'}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleMobileMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </NavbarBurger>
        {isActive ? (
          <MobileMenu className="is-hidden-desktop has-text-centered">
            <aside className="menu">
              <ul className="menu-list is-size-6">
                <Link to="/sign-up/">
                  <li>Sign up for free</li>
                </Link>
                <Link to="/">
                  <li>Subscribe</li>
                </Link>
                <Link to="/login/">
                  {' '}
                  <li>Login</li>
                </Link>
                <Link to="/">
                  {' '}
                  <li>Help</li>
                </Link>
              </ul>
            </aside>
          </MobileMenu>
        ) : null}
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <Menu className="navbar-start">
            <Wrapper className="navbar-item is-size-6 has-text-grey has-text-weight-semibolid">
              <strong className="navbar-item is-size-6 has-text-black-ter has-text-weight-semibold">
                Editorial
              </strong>{' '}
              by HTML5 UP
            </Wrapper>
          </Menu>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="navbar-end">
                <i className="icon fab fa-twitter" />
                <i className="icon fab fa-facebook-f" />
                <i className="icon fab fa-snapchat" />
                <i className="icon fab fa-instagram" />
                <i className="icon fab fa-medium-m" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
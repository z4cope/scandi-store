//General React imports
import React from "react";
import { Link } from "react-router-dom";
//Components
import OpenCart from "../openCart/OpenCart";
//Redux
import { connect } from "react-redux";
import logo from "../../assests/Brand-icon.png";
//Styles
import { StyledNavWrapper, StyledEmptyCart } from "./style";
import {
  toggleCartAction,
  toggleCurrencyMenu,
} from "../../redux/actions/toggleCart/toggleCartAction";
import CurrencySwitcher from "../currencySwitcher/CurrencySwitcher";
class Navbar extends React.Component {
  render() {
    return (
      <StyledNavWrapper>
        <nav>
          <ul className="options">
            <li>All</li>
            <li>Clothes</li>
            <li>Tech</li>
          </ul>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="nav-actions">
            <li onClick={() => this.props.toggleCurrencyMenu()}>
              {this.props.currency}
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0.5L4 3.5L7 0.5"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>
              <StyledEmptyCart
                onClick={() => this.props.toggleCart()}
                src="/images/emptyCart.svg"
              ></StyledEmptyCart>
            </li>
          </ul>
        </nav>
        <OpenCart state={this.props.toggle} />
        <CurrencySwitcher />
      </StyledNavWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toggle: state.toggle.toggleState,
    currency: state.currency.currentSymbol,
    cart: state.cart.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleCartAction()),
    toggleCurrencyMenu: () => dispatch(toggleCurrencyMenu()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

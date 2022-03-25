//General React imports
import React from "react";
import { Link } from "react-router-dom";

//Components
import OpenCart from "../openCart/OpenCart";
import CurrencySwitcher from "../currencySwitcher/CurrencySwitcher";

//Redux
import { connect } from "react-redux";

//Actions
import {
  toggleCartAction,
  toggleCurrencyMenu,
} from "../../redux/actions/toggleCart/toggleCartAction";
import { productsFilterAction } from "../../redux/actions/pagesFilterAction/productsFilterAction";

//Assests
import logo from "../../assests/Brand-icon.png";

//Utils
import { navElements } from "../../utils/navElements";

//Styles
import { StyledNavWrapper, StyledCart, ProductsQty, NavElement } from "./style";

class Navbar extends React.Component {
  state = {
    current: 0,
  };

  setNavItemsActiveState = (i) => {
    this.setState({ current: i });
  };

  render() {
    return (
      <StyledNavWrapper>
        <nav>
          <ul className="options">
            {navElements.map((element, i) => (
              <NavElement
                key={i}
                style={{
                  borderBottom:
                    this.state.current === i ? "2px solid #5ece7b" : 0,
                }}
                onClick={() => {
                  this.props.filterPages(i, element.name);
                  this.setNavItemsActiveState(i);
                }}
                active={this.state.current === i}
              >
                {element.name}
              </NavElement>
            ))}
          </ul>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="nav-actions">
            <li onClick={() => this.props.toggleCurrencyMenu()}>
              {this.props.currency}{" "}
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
              <StyledCart
                onClick={() => this.props.toggleCart()}
                src="/images/emptyCart.svg"
              >
                <ProductsQty>{Object.keys(this.props.cart).length}</ProductsQty>
              </StyledCart>
            </li>
          </ul>
        </nav>
        <OpenCart state={this.props.toggle} />
        <CurrencySwitcher />
      </StyledNavWrapper>
    );
  }
}

//State To Props & Dispatch To Props
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
    filterPages: (arrIndex, catName) =>
      dispatch(productsFilterAction(arrIndex, catName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

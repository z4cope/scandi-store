//General react imports
import React from "react";
import { Link } from "react-router-dom";
//Redux stuff
import { connect } from "react-redux";
import { toggleCartAction } from "../../redux/actions/toggleCart/toggleCartAction";
import {
  productQuantityIncrementAction,
  productQuatityDecrementAction,
} from "../../redux/actions/productQuantity/productQuantityAction";
//Styles
import {
  CartOverlay,
  CartList,
  CartDetails,
  CartTitle,
  CardDetailsWrapper,
  CartPoductName,
  CartProductPrice,
  CartProductSpecs,
  CartProductNumber,
  Total,
  CallToActions,
  Color,
  SelectedVariants,
} from "./style";
import { generateTotalPrice } from "../../utils/calcTotalPrice";

class OpenCart extends React.Component {
  render() {
    return (
      <CartOverlay active={this.props.toggle}>
        <CartList>
          <CartTitle>My Bag, 2 items</CartTitle>
          {this.props.cart.length
            ? this.props.cart.map((product) => {
                return (
                  <CartDetails key={product.cartId}>
                    <CardDetailsWrapper>
                      <CartPoductName>{product.name}</CartPoductName>
                      <CartProductPrice>
                        {product.prices[0].currency.symbol}
                        {product.prices[0].amount}
                      </CartProductPrice>
                      <CartProductSpecs>
                        {product.attributes.map((attr, i) =>
                          attr.id === "Color" ? (
                            <Color
                              key={attr.selectedVariant.id}
                              color={attr.selectedVariant.value}
                            />
                          ) : (
                            <SelectedVariants key={i}>
                              {attr.selectedVariant.id}
                            </SelectedVariants>
                          )
                        )}
                      </CartProductSpecs>
                    </CardDetailsWrapper>
                    <CartProductNumber>
                      <div>
                        <button
                          onClick={() => this.props.incrementProduct(product)}
                        >
                          +
                        </button>
                        <h4>{product.qty}</h4>
                        <button
                          onClick={() => this.props.decrementProduct(product)}
                        >
                          -
                        </button>
                      </div>
                      <img src={product.gallery[0]} alt={product.name} />
                    </CartProductNumber>
                  </CartDetails>
                );
              })
            : null}
          <Total>
            <h3>Total</h3>
            {this.props.currencySymbol}
            {generateTotalPrice(this.props.cart, this.props.currencySymbol)}
          </Total>
          <CallToActions>
            <Link to="/cart">VIEW BAG</Link>
            <Link to="#">CHECKOUT</Link>
          </CallToActions>
        </CartList>
      </CartOverlay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: Object.values(state.cart.data),
    toggle: state.toggle.toggleState,
    currencySymbol: state.currency.currentSymbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleCartAction()),
    incrementProduct: (product) =>
      dispatch(productQuantityIncrementAction(product)),
    decrementProduct: (product) =>
      dispatch(productQuatityDecrementAction(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenCart);

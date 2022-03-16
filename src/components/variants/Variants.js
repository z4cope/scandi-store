//General react imports
import React from "react";
//Redux stuff
import { connect } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartActions/addToCartAction";
//Components
import {
  AttributeName,
  AttributeTypeWrapper,
  Color,
  TechVariants,
  VariantBox,
} from "./style";

class Variants extends React.Component {
  render() {
    const isActive = (itemId) => {
      const variant = this.props.selectedVariant || this.props.defaultVariant;
      return variant?.id == itemId;
    };

    return this.props.attr.type === "swatch" ? (
      <TechVariants>
        <AttributeName>{this.props.attr.name}:</AttributeName>
        <AttributeTypeWrapper>
          {this.props.attr.items.map((item) => (
            <Color
              onClick={() =>
                this.props.onVariantsChange(this.props.attr.id, item)
              }
              key={item.id}
              color={item.value}
            />
          ))}
        </AttributeTypeWrapper>
      </TechVariants>
    ) : (
      <TechVariants>
        <AttributeName>{this.props.attr.name}:</AttributeName>
        <AttributeTypeWrapper>
          {this.props.attr.items.map((item) => (
            <VariantBox
              key={item.id}
              onClick={() => {
                this.props.onVariantsChange(this.props.attr.id, item);
              }}
              active={isActive(item.id)}
            >
              {item.value}
            </VariantBox>
          ))}
        </AttributeTypeWrapper>
      </TechVariants>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addVariants: (variants) => dispatch(addToCartAction(variants)),
  };
};
export default connect(null, mapDispatchToProps)(Variants);

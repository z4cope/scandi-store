//General react imports
import React from "react";
//Components
import ProductCard from "../../components/productCard/ProductCard";
//Redux stuff
import { connect } from "react-redux";
import { fetchCategoriesAction } from "../../redux/actions/fetchCategories/fetchCategoriesAction";
//Styles
import { HomeWrapper, HomeHeadLine, ProductsWrapper } from "./style";

class Home extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    return (
      <HomeWrapper>
        <HomeHeadLine>Category name</HomeHeadLine>
        <ProductsWrapper>
          {this.props.categories.length
            ? this.props.categories[0].products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))
            : null}
        </ProductsWrapper>
      </HomeWrapper>
    );
  }
}

//Dispatch
const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
    cart: state.cart.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategoriesAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

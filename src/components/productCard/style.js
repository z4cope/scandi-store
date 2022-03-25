import styled from "styled-components";

export const CartImg = styled.div`
  background: url(${({ src }) => src}) center / 24px no-repeat;
  width: 24px;
  height: 24px;
  background-color: #5ece7b;
  padding: 1.5rem;
  border-radius: 100px;
  position: absolute;
  top: 320px;
  right: 10%;
  opacity: 0;
  transition: all 0.3s ease;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 386px;
  height: 444px;
  padding: 16px;
  transition: all 0.3s ease;
  position: relative;
  h2 {
    margin: 1rem 0rem;
  }
  .price {
    display: flex;
    flex-direction: column;
  }
  &:hover {
    background: #ffffff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    ${CartImg} {
      opacity: 1;
    }
  }
`;

export const ProductImage = styled.div`
  height: 330px;
  /* margin: auto; */
  background: url(${({ src }) => src}) center / cover no-repeat;
  position: relative;
`;

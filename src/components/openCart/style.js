import styled from "styled-components";

export const CartOverlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: flex-end;
  transition: all 0.3s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
  z-index: ${({ active }) => (active ? 999 : -1)};
`;

export const CartList = styled.div`
  width: 325px;
  min-height: 10vh;
  background-color: white;
  margin-right: 5%;
  padding: 16px;
  position: absolute;
  right: 0;
`;

export const CartDetails = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 41px;
`;

//Product details
export const CartTitle = styled.h3`
  margin-bottom: 2rem;
`;
export const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;
export const CartPoductName = styled.h3`
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  width: 136px;
`;
export const CartProductPrice = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
`;
export const CartProductSpecs = styled.div`
  display: flex;
  h6 {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    :nth-child(1) {
      margin-right: 6px;
    }
  }
`;

//Product number
export const CartProductNumber = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    button {
      width: 24px;
      height: 24px;
      border-radius: 0;
      border: 1px solid black;
      background-color: white;
    }
  }
  img {
    width: 105px;
    min-height: 137px;
    object-fit: cover;
    margin-left: 1rem;
  }
`;

//Total
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
`;

//Call to actions
export const CallToActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 50%;
    border-radius: 0;
    background-color: white;
    border: 1px solid black;
    height: 43px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    :nth-child(2) {
      margin-left: 0.5rem;
      background-color: #5ece7b;
      border-color: #5ece7b;
      color: white;
    }
  }
`;

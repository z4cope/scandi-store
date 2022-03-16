import styled from "styled-components";
export const StyledNavWrapper = styled.div`
  width: 100%;
  min-height: 10vh;
  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: inherit;
    ul {
      display: flex;
      align-items: center;
      flex: 1 0 200px;
    }
    .options {
      li {
        margin-right: 2rem;
        cursor: pointer;
      }
    }
    .nav-actions {
      text-align: right;
      justify-content: flex-end;
      li {
        margin-left: 2rem;
        cursor: pointer;
      }
    }
    img {
      width: 100%;
      height: 3%;
    }
  }
`;

export const StyledEmptyCart = styled.div`
  width: 20px;
  height: 20px;
  background: url(${({ src }) => src}) center / contain no-repeat;
`;

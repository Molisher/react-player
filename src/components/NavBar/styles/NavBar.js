import styled from "styled-components/macro";

export const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    background: transparent;
    border: 2px solid rgb(65, 65, 65);
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0.5s ease;
    &:hover {
      background: rgb(65, 65, 65);
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
    button {
      z-index: 10;
    }
  }
`;

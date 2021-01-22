import styled from "styled-components/macro";

export const LibraryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  overflow: scroll;
  background: white;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  transform: ${(props) =>
    props.libraryOpen ? "translateX(0%)" : "translateX(-100%)"};
  transition: all 0.5s ease;
  opacity: ${(props) => (props.libraryOpen ? "1" : "0")};
  h2 {
    padding: 2rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LibraryList = styled.div``;

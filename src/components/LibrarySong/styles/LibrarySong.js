import styled from "styled-components/macro";

export const LibrarySongContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  transition: background 0.5s ease;
  background-color: ${(props) =>
    props.active ? "rgb(165,181,228)" : "transparent"};
  cursor: pointer;
  img {
    width: 30%;
  }
  &:hover {
    background-color: rgb(222, 222, 255);
  }
`;

export const LibrarySongDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.75rem;
  }
`;

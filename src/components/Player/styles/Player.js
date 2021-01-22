import styled from "styled-components/macro";

export const PlayerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TimeControl = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  input {
    width: 100%;
    /* padding: 1rem 0rem; */
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;

    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      appearance: none;
      height: 16px;
      width: 16px;
    }
    &::-moz-range-thumb {
      appearance: none;
      background: transparent;
      border: none;
    }
  }
  p {
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const PlayControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 30%;

  svg {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

export const InputTrack = styled.div`
  background: ${(props) =>
    `linear-gradient(to right, ${props.color[0]}, ${props.color[1]})`};
  width: 100%;
  height: 1rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`;
export const InputTrackAnimate = styled.div`
  background: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${(props) => `translateX(${props.time}%)`};
  pointer-events: none;
`;

import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "blue"};
  font-size: 1rem;
  border: black 1px solid;
  border-radius: 13%;
  color: ${(props) => (props.variant === "outline" ? "black" : "white")};
  padding: 0.6rem 3%;
  margin: 1rem;
  width: 100%;
  /* for pseduo classes */
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "white" : "blue"};

    color: ${(props) => (props.variant !== "outline" ? "black" : "white")};
  }

  /* you can also add media query  */
  @media (min-width:750px){
    width: auto;
  }
`;
// extending the original btn
export const FancyButton = styled(StyledButton)`
  margin: 1.5rem;
  background-image: linear-gradient(to right, green 0%, yellow 100%);
`;
// setting attributes
export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  margin: 1.5rem;
  background-image: linear-gradient(to right, blue 0%, pink 100%);
`;

//apply theme on whole backgroud if we send dark or light as props`

export const OccupyDiv = styled.div`
  background-color: ${(props) => {
    let valColor = props.passedValue;
    return props.theme[valColor].primary;
  }};
`;

// adding animations and keyframes
const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AntimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

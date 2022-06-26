import React from "react";
import logo from "./logo.png";
import {
  AntimatedLogo,
  FancyButton,
  OccupyDiv,
  StyledButton,
  SubmitButton,
} from "./components/StyledButton";
import { createGlobalStyle, ThemeProvider } from "styled-components";
//theme
const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

//create global stylsheet -- common for all like sam efont family on all button
//mainly global style is used for common presets

const GlobalStyle= createGlobalStyle`
button{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <OccupyDiv passedValue="dark">
          {/* normal */}
          <div>
            <button>BUTTON 1</button>
          </div>
          {/* styled components -- like this we can resuse this btn css in many places */}
          <div>
            <StyledButton>BUTTON 2</StyledButton>
          </div>
          {/* styled components -- like this we can resuse this btn css in many places
    we can also pass props and conditionally can display the btn  and also we used pusedo classes
    */}
          <div>
            <StyledButton variant="outline">BUTTON 3</StyledButton>
          </div>

          {/* extendeing previous btn funcnaity and adding new  */}
          <div>
            <FancyButton>BUTTON 3</FancyButton>
          </div>

          {/* we can create a anchir tag also by adding  */}
          <div>
            <FancyButton as="a">BUTTON 3</FancyButton>
          </div>

          {/* adding attributes */}
          <div>
            <SubmitButton>BUTTON 4</SubmitButton>
          </div>

          {/* using keyframes and animation */}
          <AntimatedLogo src={logo}></AntimatedLogo>
        </OccupyDiv>
      </ThemeProvider>
    </>
  );
}

export default App;

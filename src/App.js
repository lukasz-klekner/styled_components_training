import { ThemeProvider, createGlobalStyle } from 'styled-components';

import './App.css';
import { AnimatedLogo, DarkButton, FancyButton, SubmitButton } from './components/Button/Button.styles';
import Button  from './components/Button/Button';
import logo from './logo.svg'

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${({theme}) => theme.fontFamily};
  }
`

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  fontFamily: 'Roboto'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <AnimatedLogo src={logo} />
        <br />
        <br />
        <Button>Styled button</Button>
        <br/>
        <br/>
        <Button variant='outline'>Styled button</Button>
        <br/>
        <br/>
        <FancyButton as='a'>Fancy Button</FancyButton>
        <br/>
        <br/>
        <SubmitButton>Submit</SubmitButton>
        <br/>
        <br/>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;

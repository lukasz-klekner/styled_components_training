import './App.css';
import { AnimatedLogo, FancyButton, SubmitButton } from './components/Button/Button.styles';
import Button  from './components/Button/Button';
import logo from './logo.svg'


function App() {
  return (
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
    </div>
  );
}

export default App;

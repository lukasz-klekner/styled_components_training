import './App.css';
import { FancyButton } from './components/Button/Button.styles';
import Button  from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button>Styled button</Button>
      <br/>
      <br/>
      <Button variant='outline'>Styled button</Button>
      <br/>
      <br/>
      <FancyButton as='a'>Fancy Button</FancyButton>
    </div>
  );
}

export default App;

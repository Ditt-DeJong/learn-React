import logo from './logo.svg';
import './App.css';
import Fiko from './components/hello';
import Greetings from './components/Greetings';
import Guten from './components/Guten';
import Follow from './components/Follow';

function App() {
  return (
    <div className="App">
      <Fiko/>
      <Greetings/>
      <Guten name="Fiko"/>
      <Guten name="Mr Fikky"/>
      <Guten name="Kiki"/>
      <Follow/>
    </div>
  );
}

export default App;

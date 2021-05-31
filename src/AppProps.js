//import logo from './logo.svg';
import './App.css';
import Classprops from './Props/Classprops';
import Functionprops from './Props/Functionprops'


function App() {
  return (
    <div>
      <Classprops name="Learners 1" place="London" >
        <p>Child Component</p>
      </Classprops>
      <Classprops name="Learners 2" place="Paris">
        <button>Click</button>
        </Classprops>
      <Classprops name="Learners 3" place="NewYork" />
      <Functionprops name="Learners 4" place="Delhi" />



    </div>

  );
}

export default App;

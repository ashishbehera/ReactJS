//import logo from './logo.svg';
import './App.css';
import { ClassComp, ClassComp1 } from './components/ClassComp';
import FunctionalComp from './components/FunctionalComp';
import Click from './components/Click';
import Counter from './components/Counter';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div>
      <h1>Welcome to the World of React JS!!!</h1>
      <h1>This Tutorial is about components</h1>
      <FunctionalComp />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp/>
    </div>

  );
}

export default App;

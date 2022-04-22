import { render } from '@testing-library/react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arr = ['passear dogs', 'lavar louça', 'faxinar casa', 'limpar quintal'];
function App() {
  render() {return (<ul>{ arr.map((element) => Task(element)) }</ul>);}
}

export default App;

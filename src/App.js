import logo from './logo.svg';
import './App.css';

const Li = () => {
  return (
    <li className='clase-li'>valor de Li</li>
  )
}

const App = () => {
  const valor = 'medio medio'
  return (
    <ul className="clase-css">
      <Li></Li>
    </ul>
  );
}

export default App;

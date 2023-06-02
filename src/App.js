import logo from './logo.svg';
import './App.css';


const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.5',
};

const estilo = ({ bg = '#733' }) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
});

const Li = () => {
  return (
    <li style={{ ...estilo2, ...estilo({ bg: "#533" }) }} className='clase-li'>valor de Li</li>
  )
}

const App = () => {
  const valor = 'medio medio'
  return (
    <ul style={estilo({ bg: '#050' })} className="clase-css">
      <Li></Li>
    </ul>
  );
}

export default App;

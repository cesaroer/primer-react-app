import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));


//const x = React.createElement('h1', null, 'hola')

const Li = ({ children, estado, casa, edad }) => {

  console.log(casa, edad)
  return (
    <li>{children} estoy {estado}</li>
  )
}
const X = () =>
  <ul>
    <Li
      estado={'Muy'}
      casa={false}
      edad={24}
    >
      Feliz
    </Li>
    <Li estado={'emocionado'}>Feliz medio</Li>
    <Li estado={'algo'}>Triste</Li>
  </ul>

root.render(
  <X />, document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

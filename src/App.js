import { Component } from 'react'

// class Btn extends Component {
//     state = {
//     }

//     constructor(props) {
//         // Se ejecuta primero
//         super(props)
//         console.log('Constructor', props);

//     }

//     componentDidMount() {
//         // se ejecuta ultimo
//         console.log('componentDidMount');
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log('componentDid-Update', prevProps, prevState);
//     }

//     componentWillUnmount() {
//         console.log('componentWillUnmount', this.props, this.state);
//     }

//     render() {
//         // se ejecuta en medio
//         console.log("Ejecutando metodo render de Btn")

//         return (
//             <button onClick={() => this.setState({ prop: 1 })}>
//                 Evniar
//             </button>
//         )
//     }
// }


class App extends Component {

    state = {
        productos: [
            { name: 'Tomate', price: 1500, img: 'prodctos/tomate.jpg' },
            { name: 'Chocharos', price: 2500, img: 'prodctos/arbejas.jpg' },
            { name: 'Lechuga', price: 500, img: 'prodctos/lechuga.jpg' },
        ]
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <p>
                    Hola Mundo
                </p>
            </div>
        )
    }
}

export default App
import { Component } from 'react'

class Btn extends Component {
    state = {
    }

    constructor(props) {
        // Se ejecuta primero
        super(props)
        console.log('Constructor', props);

    }

    componentDidMount() {
        // se ejecuta ultimo
        console.log('componentDidMount');
    }

    render() {
        // se ejecuta en medio
        console.log("Ejecutando metodo render de Btn")

        return (
            <button>
                Evniar
            </button>
        )
    }
}


class App extends Component {

    state = {
        valor: 3
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <p>
                    Hola Mundo
                </p>
                <Btn humor="feliz" />
                <button
                    className={this.state.valor}
                    onClick={() => this.setState({ valor: 2 })}
                >
                    Send
                </button>
            </div>
        )
    }
}

export default App
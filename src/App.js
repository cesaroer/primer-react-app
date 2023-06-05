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

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDid-Update', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', this.props, this.state);
    }

    render() {
        // se ejecuta en medio
        console.log("Ejecutando metodo render de Btn")

        return (
            <button onClick={() => this.setState({ prop: 1 })}>
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
                {this.state.valor === 3
                    ? <Btn humor="feliz" />
                    : null}
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
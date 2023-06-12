import { Component } from 'react'
import Productos from './components/Productos'

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
                <Productos
                    agregarAlCarro={() => console.log('No hace nada')}
                    productos={this.state.productos}
                />
            </div>
        )
    }
}

export default App
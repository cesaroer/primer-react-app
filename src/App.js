import Button from './button'

const App = () => {
    return (
        <div>
            <h1> Hola mundo</h1>
            <Button onClick={() => console.log('Clickeado')} >Enviar2</Button>
        </div>
    )
}

export default App
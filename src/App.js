import Button from './button'

const App = () => {
    const myVariable = false;

    if (myVariable) {
        return <p>Mi variable dio true!</p>
    }
    return (
        <div>
            <h1 onClick={(e) => console.log("Click", e)}> Hola mundo</h1>
            <Button onClick={() => console.log('Clickeado')} >
                Enviar2
            </Button>
        </div>
    )
}

export default App
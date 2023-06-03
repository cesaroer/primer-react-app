import Button from './button'

const arr = [
    'feliz',
    'triste',
    'emocionado',
]

const App = () => {
    const myVariable = false;

    if (myVariable) {
        return <p>Mi variable dio true!</p>
    }
    return (
        <div>
            <h1 onClick={(e) => console.log("Click", e)}> Hola mundo</h1>
            {arr.map(e => <p key={e}>{e}</p>)}
            <Button onClick={() => console.log('Clickeado')} >
                Enviar2
            </Button>
        </div>
    )
}

export default App
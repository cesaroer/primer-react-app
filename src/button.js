import './Button.css'


const Button = (props) => {
    return (
        <button {...props} className='btn' />// El children se pasa por el props
    );
}

export default Button;
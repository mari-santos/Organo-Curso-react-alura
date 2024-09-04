import './textField.css';

export const TextField = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='textfield'>
            <label className='subtitle'>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} className='caption' placeholder={props.placeholder}/>
        </div>
    )
}
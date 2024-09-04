import './selectField.css'
import '../textField/textField.css'

export const SelectField = (props) => {

    return (
        <div >
            <label className='subtitle'>{props.label}</label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                name='times'
                id='times'
                className='selectLayout caption'
                value={props.valor}
            >
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
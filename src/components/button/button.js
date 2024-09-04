import './button.css'

export const Button = (props) => {
    return (
        <div className='buttonLayout'>
            <button type='submit' value='text' className='button'> {props.label} </button>
        </div>
    )
}
import './time.css';
import {Card} from '../card/card'

export const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: props.fundo}}>
            <div style={{borderColor: props.destaque}} className='title'>{props.nomeTime}</div>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador =>
                    <Card
                        key={colaborador.nome}
                        corDeFundo={props.destaque}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />)}
            </div>
        </section>
    )
}
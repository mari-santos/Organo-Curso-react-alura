import './card.css';

export const Card = ({nome, imagem, cargo, corDeFundo}) => {
    return(
        <div className='colaborador'>
           <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
               <img src={imagem} alt="Nome do Colaborador" />
           </div>
           <div className='rodape'>
               <div className='subtitle'>{nome}</div>
               <div className="body1">{cargo}</div>
           </div>
        </div>
    )
}
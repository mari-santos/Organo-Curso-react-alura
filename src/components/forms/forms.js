import './forms.css'
import {TextField} from "../textField/textField";
import {Button} from "../button/button";
import {SelectField} from "../selectField/selectField";
import {useState} from "react";


export const Forms = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setTime('')
        setImagem('')
    }

    return(
        <section className='formLayout'>
            <form onSubmit={aoSalvar}>
                <div className='title'>Preencha os dados para criar o card do colaborador</div>
                <TextField
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <SelectField
                    label="Times"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button label="Criar card" />
            </form>
        </section>
    )
}
import {Banner} from "./components/banner/banner";
import {Forms} from "./components/forms/forms";
import {useState} from "react";
import {Time} from "./components/time/time";
import {programacao, dataScience, devops, frontEnd, mobile, uxDesign, inovacaoGestao } from "./styles/timesColors";

function App() {

    const times = [
        {
            nome: 'Data Science',
            primaryColor: dataScience.destaque ,
            secondaryColor: dataScience.fundo,
        },
        {
            nome: 'Devops',
            primaryColor: devops.destaque,
            secondaryColor: devops.fundo,
        },
        {
            nome: 'Front-End',
            primaryColor: frontEnd.destaque,
            secondaryColor: frontEnd.fundo,
        },
        {
            nome: 'Inovação e Gestão',
            primaryColor: inovacaoGestao.destaque,
            secondaryColor: inovacaoGestao.fundo ,
        },
        {
            nome: 'Mobile',
            primaryColor: mobile.destaque,
            secondaryColor: mobile.fundo,
        },
        {
            nome: 'Programação',
            primaryColor: programacao.destaque,
            secondaryColor: programacao.fundo,
        },
        {
            nome: 'UX e Design',
            primaryColor: uxDesign.destaque,
            secondaryColor: uxDesign.fundo,
        }
    ]

    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }

    return (
    <div className="App">
      <Banner />
        <Forms times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        {times.map(time => (
            <Time
                key={time.nome}
                nomeTime={time.nome}
                destaque={time.primaryColor}
                fundo={time.secondaryColor}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />
        ))}
    </div>
  );
}

export default App;

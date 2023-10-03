import React, { useEffect, useState } from 'react';
import { obterPessoas, obterPlanetas, obterEspecies, obterNaves } from '../services/api'


import '../styles/TabelaInfo.css'


function formatarData(dataFornecida) {
    const dataFormatada = new Date(dataFornecida).toLocaleString("pt-BR", 
    {year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: "UTC" });
    return dataFormatada;
}
  // format(new Date(dataFornecida), "dd/MM/yyyy HH:mm", { timeZone: "UTC" });

const TabelaInfo = (props) => {
    const [pessoas, setPessoas] = useState([]);
    const [planetas, setPlanetas] = useState([]);
    const [especies, setEspecies] = useState([]);
    const [naves, setNaves] = useState([]);
    const [search, setSearch] = useState("");



   // 
    
   useEffect(() => {
        obterPessoas().then((pessoasData) => setPessoas(pessoasData));
        obterPlanetas().then((planetasData) => setPlanetas(planetasData));
        obterEspecies().then((especiesData) => setEspecies(especiesData));
        obterNaves().then((navesData) => setNaves(navesData));
    }, []);

    return (
        <>
            {
                props.tipo === 'Pessoas' ? 

                    <>
                        <div className="tabela">
                            <span className="tituloTabela">{props.tipo}</span>
                            <input className="barraPesquisa" type="search" value={search} onChange={(e) => setSearch(e.target.value)}  />
                            <hr size="1" noshade color='#E9E9E9'/>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Altura</th>
                                        <th>Ano de nascimento</th>
                                        <th>Criado em</th>
                                        <th>Editado em</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {// name, height, birth_year, created, edited / console.log(pessoas.results[0].name)
                                        pessoas && pessoas.results && pessoas.results.map((pessoa) => (
                                            <tr key={pessoa.name}>
                                                <td>{pessoa.name}</td>
                                                <td>{pessoa.height}</td>
                                                <td>{pessoa.birth_year}</td>
                                                <td>{formatarData(pessoa.created)}</td>
                                                <td>{formatarData(pessoa.edited)}</td>
                                            </tr>
                                        ))
                                    } 
                                </tbody>
                            </table>
                        </div>
                    </> :
                    props.tipo === 'Planetas' ? 
                    <>
                        <div className="tabela">
                            <span className="tituloTabela">{props.tipo}</span>
                            <hr size="1" noshade color='#E9E9E9'/>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>População</th>
                                        <th>Clima</th>
                                        <th>Criado em</th>
                                        <th>Editado em</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {// name, population, climate, created, edited / console.log(pessoas.results[0].name)
                                        planetas && planetas.results && planetas.results.map((planeta) => (
                                            <tr key={planeta.name}>
                                                <td>{planeta.name}</td>
                                                <td>{planeta.population}</td>
                                                <td>{planeta.climate}</td>
                                                <td>{formatarData(planeta.created)}</td>
                                                <td>{formatarData(planeta.edited)}</td>
                                            </tr>
                                        ))
                                    } 
                                </tbody>
                            </table>
                        </div>
                    </> :
                    props.tipo === 'Especies' ? 
                    <>
                        <div className="tabela">
                            <span className="tituloTabela">{props.tipo}</span>
                            
                            <hr size="1" noshade color='#E9E9E9'/>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Classificação</th>
                                        <th>Designação</th>
                                        <th>Criado em</th>
                                        <th>Editado em</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {// name, classification, designation, created, edited / console.log(pessoas.results[0].name)
                                        especies && especies.results && especies.results.map((especie) => (
                                            <tr key={especie.name}>
                                                <td>{especie.name}</td>
                                                <td>{especie.classification}</td>
                                                <td>{especie.designation}</td>
                                                <td>{formatarData(especie.created)}</td>
                                                <td>{formatarData(especie.edited)}</td>
                                            </tr>
                                        ))
                                    } 
                                </tbody>
                            </table>
                        </div>
                    </> :
                    props.tipo === 'Naves' ?
                    <>
                        <div className="tabela">
                            <span className="tituloTabela">{props.tipo}</span>
                            <hr size="1" noshade color='#E9E9E9'/>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Modelo</th>
                                        <th>Fabricante</th>
                                        <th>Velocidade</th>
                                        <th>Valor em créditos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {// name, model, manufacturer, max_atmosphering_speed, cost_in_credits / console.log(pessoas.results[0].name)
                                        naves && naves.results && naves.results.map((nave) => (
                                            <tr key={nave.name}>
                                                <td>{nave.name}</td>
                                                <td>{nave.model}</td>
                                                <td>{nave.manufacturer}</td>
                                                <td>{nave.max_atmosphering_speed}</td>
                                                <td>{nave.cost_in_credits}</td>
                                            </tr>
                                        ))
                                    } 
                                </tbody>
                            </table>
                        </div>
                    </> :
                    <>
                    </> 
            }
                    
        </>
    )
}

export default TabelaInfo
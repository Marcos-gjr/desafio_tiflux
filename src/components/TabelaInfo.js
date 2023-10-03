import React, { useEffect, useState } from 'react';
import { obterPessoas, obterPlanetas, obterEspecies, obterNaves } from '../services/api'

import '../styles/TabelaInfo.css'


const TabelaInfo = (props) => {
    const [pessoas, setPessoas] = useState([]);
    const [planetas, setPlanetas] = useState([]);
    const [especies, setEspecies] = useState([]);
    const [naves, setNaves] = useState([]);

    useEffect(() => {
        obterPessoas().then((pessoasData) => setPessoas(pessoasData));
        obterPlanetas().then((planetasData) => setPlanetas(planetasData));
        obterEspecies().then((especiesData) => setEspecies(especiesData));
        obterNaves().then((navesData) => setNaves(navesData));
    }, []);

    return (
        <div className="tabela">
            <span className="tituloTabela">Pessoas</span>
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
                    
                </tbody>
            </table>
        </div>
    )
}

export default TabelaInfo
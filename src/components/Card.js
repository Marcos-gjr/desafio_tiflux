import React, { useEffect, useState } from 'react';
import { obterPessoas, obterPlanetas, obterEspecies, obterNaves } from '../services/api'
import Pessoas from '../assets/icons/Pessoas.svg'
import Planetas from '../assets/icons/Planetas.svg'
import Especies from '../assets/icons/Especies.svg'
import Naves from '../assets/icons/Naves.svg'

import '../styles/Card.css'



const Cards = (props) => {
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
        <div className="Cards">
            <div className="Card">
                { 
                    props.tipo === 'Pessoas' ? 
                    <>
                        <button className="btnPessoas">
                            <aside className="headCard">
                                <span className="titleCard">{props.tipo}</span>
                            </aside>
                            <aside className="bodyCard">
                                <img src={Pessoas} alt="" />
                                <span>{pessoas.count}</span>
                            </aside>
                        </button>
                    </> : 
                    props.tipo === 'Planetas' ?
                    <>
                        <button className="btnPlanetas">
                            <aside className="headCard">
                                <span className="titleCard">{props.tipo}</span>
                            </aside>
                            <aside className="bodyCard">
                                <img src={Planetas} alt="" />
                                <span>{planetas.count}</span>
                            </aside>
                        </button>
                    </> :
                    props.tipo === 'Especies' ?
                    <>
                        <button className="btnEspecies">
                            <aside className="headCard">
                                <span className="titleCard">{props.tipo}</span>
                            </aside>
                            <aside className="bodyCard">
                                <img src={Especies} alt="" />
                                <span>{especies.count}</span>
                            </aside>
                        </button>
                    </> :
                    props.tipo === 'Naves' ?
                    <>
                        <button className="btnNaves">
                            <aside className="headCard">
                                <span className="titleCard">{props.tipo}</span>
                            </aside>
                            <aside className="bodyCard">
                                <img src={Naves} alt="" />
                                <span>{naves.count}</span>
                            </aside>
                        </button>
                    </> :
                    <span>Não foi possível carregar a imagem</span>
                }
            
            </div>
        </div>
    );
}

export default Cards
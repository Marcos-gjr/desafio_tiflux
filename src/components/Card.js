import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { obterPessoas, obterPlanetas, obterEspecies, obterNaves } from '../services/api'
import Pessoas from '../assets/icons/Pessoas.svg'
import Planetas from '../assets/icons/Planetas.svg'
import Especies from '../assets/icons/Especies.svg'
import Naves from '../assets/icons/Naves.svg'

import '../styles/Card.css'


const Card = (props) => {
    const [pessoas, setPessoas] = useState([])
    const [planetas, setPlanetas] = useState([])
    const [especies, setEspecies] = useState([])
    const [naves, setNaves] = useState([])
    const [botaoAtivo, setBotaoAtivo] = useState(null)
   // const url = window.location.pathname;

    
    useEffect(() => {
        obterPessoas().then((pessoasData) => setPessoas(pessoasData))
        obterPlanetas().then((planetasData) => setPlanetas(planetasData))
        obterEspecies().then((especiesData) => setEspecies(especiesData))
        obterNaves().then((navesData) => setNaves(navesData))
    }, []);
    
    
   /* useEffect(() => {


        if (url === '/') {
          document.querySelectorAll('.btn').forEach((botao) => {
            botao.classList.remove(
              'btnPessoasAtivo',
              'btnPlanetasAtivo',
              'btnEspeciesAtivo',
              'btnNavesAtivo'
            );
          });
          setBotaoAtivo(null);
        }
      }, [url]);*/
    
    


    const cardAtivo = (estado) => {
        document.querySelectorAll('.btn').forEach((botao) => {
            botao.classList.remove('btnPessoasAtivo', 'btnPlanetasAtivo', 'btnEspeciesAtivo', 'btnNavesAtivo')
        })
        
        const botaoClicado = document.getElementById(`botao${estado}`);
        
        if (botaoClicado.id === 'botao1') {
        botaoClicado.classList.add('btnPessoasAtivo');
        } else if (botaoClicado.id === 'botao2') {
            botaoClicado.classList.add('btnPlanetasAtivo');
        } else if (botaoClicado.id === 'botao3') {
            botaoClicado.classList.add('btnEspeciesAtivo');
        } else if (botaoClicado.id === 'botao4') {
            botaoClicado.classList.add('btnNavesAtivo');
        }
        
        setBotaoAtivo(estado)
    }


    return (
        <div className="Cards">
            <div className="Card">
                { 
                    props.tipo === 'Pessoas' ? 
                    <>
                        <Link to="/pessoas" className="btnPessoas"> 
                            <button id='botao1' className={`btn btnPessoas ${botaoAtivo === 1 ? 'btnPessoasAtivo' : ''}`} onClick={() => cardAtivo(1)}>
                                <aside className="headCard">
                                    <span className="titleCard">{props.tipo}</span>
                                </aside>
                                <aside className="bodyCard">
                                    <img src={Pessoas} alt="" />
                                    <span>{pessoas && pessoas.count}</span>
                                </aside>
                            </button>
                        </Link>
                    </> : 
                    props.tipo === 'Planetas' ?
                    <>
                        <Link to="/planetas" className="btnPlanetas">
                            <button id='botao2' className={`btn btnPlanetas ${botaoAtivo === 2 ? 'btnPlanetasAtivo' : ''}`} onClick={() => cardAtivo(2)}>
                                <aside className="headCard">
                                    <span className="titleCard">{props.tipo}</span>
                                </aside>
                                <aside className="bodyCard">
                                    <img src={Planetas} alt="" />
                                    <span>{planetas && planetas.count}</span>
                                </aside>
                            </button>
                        </Link>
                    </> :
                    props.tipo === 'Especies' ?
                    <>
                        <Link to="/especies" className="btnEspecies">
                            <button id='botao3' className={`btn btnEspecies ${botaoAtivo === 3 ? 'btnEspeciesAtivo' : ''}`} onClick={() => cardAtivo(3)}>
                                <aside className="headCard">
                                    <span className="titleCard">{props.tipo}</span>
                                </aside>
                                <aside className="bodyCard">
                                    <img src={Especies} alt="" />
                                    <span>{especies && especies.count}</span>
                                </aside>
                            </button>
                        </Link>
                    </> :
                    props.tipo === 'Naves' ?
                    <>
                        <Link to="/naves" className="btnNaves">
                            <button id='botao4' className={`btn btnNaves ${botaoAtivo === 4 ? 'btnNavesAtivo' : ''}`} onClick={() => cardAtivo(4)}>
                                <aside className="headCard">
                                    <span className="titleCard">{props.tipo}</span>
                                </aside>
                                <aside className="bodyCard">
                                    <img src={Naves} alt="" />
                                    <span>{naves && naves.count}</span>
                                </aside>
                            </button>
                        </Link>
                    </> :
                    <span>Não foi possível carregar a imagem</span>
                }
            
            </div>
        </div>
    );
}

export default Card
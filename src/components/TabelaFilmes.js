import React, { useEffect, useState } from 'react';
import { obterFilmes } from '../services/api';

import '../styles/TabelaFilmes.css'



const TabelaFilmes = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        obterFilmes().then((filmeData) => setFilmes(filmeData));

    }, []);
    
    return (

        <div className="Tabela">
            <aside className="conteudoTabela">
                <span className="nomeTabela">Filmes</span>
                {
                    filmes && filmes.map((filme) => (
                            <aside className="listaFilmes">
                                <span key={filme.title} className="conteudoFilmes">
                                    <span className="tituloFilme">{filme.title}</span>
                                    <span className="dataFilme">{(filme.release_date).split('-').reverse().join('/')}</span>
                                </span>
                            </aside>
                        
                    ))
                }
                
            </aside>
            
        </div>
    )
}

export default TabelaFilmes
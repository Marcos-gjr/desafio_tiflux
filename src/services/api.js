import axios from 'axios';


// Funções que retornam os dados necessários da API

async function obterFilmes() {
    const filmes = (await getSwapi("films/"));

    return filmes.data.results;
}

async function obterPessoas() {
    const pessoas = (await getSwapi("people/"));
    

    return pessoas.data;
}

async function obterPlanetas() {
    const planetas = (await getSwapi("planets/"));

    return planetas.data;
}

async function obterEspecies() {
    const especies = (await getSwapi("species/"));

    return especies.data;
}

async function obterNaves() {
    const naves = (await getSwapi("starships/"));

    return naves.data;
}

function getSwapi(espec) {
    return axios.get(`https://swapi.dev/api/${espec}`);
}


export {obterFilmes, obterPessoas, obterPlanetas, obterEspecies, obterNaves};
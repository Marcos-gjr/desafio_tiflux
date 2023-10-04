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

console.log(fetchAllItems())
async function fetchAllItems() {
    const totalPages = 9; // O número total de páginas
  
    // Crie um array de promessas para buscar todas as páginas em paralelo
    const promises = [];
    for (let page = 1; page <= totalPages; page++) {
      promises.push(getSwapi("people/?page=" + page));
    }
    try {
        // Aguarde todas as promessas serem resolvidas
        const results = await Promise.all(promises);

        // name, height, birth_year, created, editedCombine os resultados de todas as páginas em um único array 
        const allItems = results.flat();

        const extractedData = allItems.map((item) => ({
            name: item.name,
            height: item.height,
            birth_year: item.birth_year,
            created: item.created,
            edited: item.edited
          }));

        return allItems;
    } catch (error) {
        throw error;
    }
}


export {obterFilmes, obterPessoas, obterPlanetas, obterEspecies, obterNaves};
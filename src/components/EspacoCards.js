import Card from './Card'
import '../styles/EspacoCards.css'
import TabelaInfo from './TabelaInfo'



const EspacoCards = () => {
   
    return (
        <div className="espacoCards">
            <Card tipo="Pessoas"/>
            <Card tipo="Planetas"/>
            <Card tipo="Especies"/>
            <Card tipo="Naves"/>
            <TabelaInfo />
        </div>
    )
}

export default EspacoCards
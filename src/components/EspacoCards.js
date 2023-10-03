import Card from './Card'
import '../styles/EspacoCards.css'



const EspacoCards = () => {
   
    return (
        <div className="espacoCards">
            <Card tipo="Pessoas"/>
            <Card tipo="Planetas"/>
            <Card tipo="Especies"/>
            <Card tipo="Naves"/>
            
        </div>
    )
}

export default EspacoCards
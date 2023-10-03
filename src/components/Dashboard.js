import Header from './Header'
import TabelaFilmes from './TabelaFilmes'
import EspacoCards from './EspacoCards'


import '../styles/Dashboard.css'



const Dashboard = () => {
   
    return (
        <div className="dashboard">
            <Header />
            <TabelaFilmes />
            <EspacoCards />
        </div>
    )
}

export default Dashboard
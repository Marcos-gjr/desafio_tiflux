import Header from './Header'
import TabelaFilmes from './TabelaFilmes'
import EspacoCards from './EspacoCards'
import TabelaInfo from './TabelaInfo'
import SideBar from './SideBar'

import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

import '../styles/Dashboard.css'



const Dashboard = () => {
   
    return (
        <Router>
            <SideBar />
            <div className="dashboard">
                <Header />
                <TabelaFilmes />
                <EspacoCards />
            
                <Routes>
                    <Route exact path="/"></Route>
                    <Route path="/pessoas" element={<TabelaInfo tipo="Pessoas"/>}></Route>
                    <Route path="/planetas" element={<TabelaInfo tipo="Planetas"/>}></Route>
                    <Route path="/especies" element={<TabelaInfo tipo="Especies"/>}></Route>
                    <Route path="/naves" element={<TabelaInfo tipo="Naves"/>}></Route>

                </Routes>
            </div>
        </Router>
    )
}

export default Dashboard
import { Link } from 'react-router-dom';

import dashboard from '../assets/icons/dashboard.svg';
import ajustes from '../assets/icons/ajustes.svg';
import desconectar from '../assets/icons/desconectar.svg';
import logoSide from '../assets/logos/tifluxSide.svg';

import '../styles/SideBar.css';

const SideBar = () => {
    
    return (
        <div className="Side">
            <aside className="sidebar">
                <header className="headerSidebar">
                    <img className="imgLogo" src={logoSide} alt="Logo Tiflux para sideBar" />
                </header>
                <nav>
                    <Link to="/">
                        <button>
                            <span>
                                <img src={dashboard} alt="Icone Dashboard" />
                                <span className="txtDash">Dashboard</span>
                            </span>
                        </button>
                    </Link>
                    
                    <button>
                        <span>
                            <img src={ajustes} alt="Icone Dashboard" />
                            <span className="txtAjust">Ajustes</span>
                        </span>
                    </button>
                    <button>
                        <span>
                            <img src={desconectar} alt="Icone Dashboard" />
                            <span className="txtDesc">Desconectar</span>
                        </span>
                    </button>
                </nav>          
            </aside>
            
        </div>
    )
}

export default SideBar
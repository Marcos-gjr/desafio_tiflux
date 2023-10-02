import dashboard from '../assets/icons/dashboard.svg';
import ajustes from '../assets/icons/ajustes.svg';
import desconectar from '../assets/icons/desconectar.svg';


const SideBar = () => {
    
    return (
        <div className="sidebar">
            <h1>SideBar</h1>
            <img src={dashboard} className="icon-dash" alt="dashboard" />
            <img src={ajustes} className="icon-ajust" alt="ajustes" />
            <img src={desconectar} className="icon-desc" alt="desconectar" />
            
        </div>
    )
}

export default SideBar
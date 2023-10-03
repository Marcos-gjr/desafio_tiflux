import pesquisa from '../assets/icons/pesquisa.svg'
import notificacao from '../assets/icons/notificacaoAtiva.svg'
import user from '../assets/icons/user.svg'


import '../styles/Header.css'



const Header = () => {
    
    return (
        <div className="Header">
            <aside className='navBar'> 
                <span className='LargeTitle'>
                    Olá, User
                </span>
                <nav className='btnsInfo'>
                    <img className='btnPesquisa' src={pesquisa} alt="Botão para pesquisar filmes" />
                    <img className='btnNotific' src={notificacao} alt="Botão para acessar notificações" />
                    <span className='userInfo'>
                        <img className='btnUser' src={user} alt="Botão para configurações de usuário" />
                        <span>User</span>
                    </span>
                
                </nav>
            </aside>
            
        </div>
    )
}

export default Header
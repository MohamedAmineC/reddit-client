import logo from './logo.png';
import './Header.css'
import SearchBar from '../searchBar/SearchBar';

export const Header = () => {
    const toggle = () => {
        const menu = document.getElementById("profile-settings");
        menu.style.display = menu.style.display === "grid"? "none" : "grid";
    }
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <SearchBar/>
            <div className="functionnalities">
                <a href="https://play.google.com/store/apps/details?id=com.reddit.frontpage&hl=en_US&gl=US">
                    <div className="download">
                        <i class="bi bi-qr-code-scan"></i>
                        <p>Télécharger l'app</p>
                    </div>
                </a>
                <a href="https://www.reddit.com/login/">
                <div className="login">
                    <p>Se connecter</p>
                </div>
                </a>
                <div className="parameters" onClick={toggle}>
                    <div>
                        <i class="bi bi-person"></i>
                        <i class="bi bi-chevron-down"></i>
                        <ul id="profile-settings">
                            <i class="bi bi-moon"></i><li>Théme sombre</li>
                            <i class="bi bi-question-circle"></i><li>Centre d'aide</li>
                            <i class="bi bi-info-circle"></i><li>Plus</li>
                            <i class="bi bi-file-earmark-text"></i><li>Conditions et Politiques</li>
                            <i class="bi bi-megaphone"></i><li>Votre publicité sur Reddit</li>
                            <i class="bi bi-box-arrow-in-right"></i><li>Se connecter et se déconnecter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        )
}
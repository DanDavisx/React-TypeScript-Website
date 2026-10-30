import './SideNav.css'
import siteLogo from '../brand/apex-notes-logo-white.svg'


type SideNavProps = {
    isOpen: boolean
    onClose: () => void
}

export default function SideNav({isOpen, onClose}: SideNavProps) {
    return (
        <>
        <div className={`menu-backdrop${isOpen ? ' is-open' : ''}`} id="menu-backdrop" aria-hidden="true"></div>
        <aside
        className={`site-menu${isOpen ? ' is-open' : ''}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}>
            <div className="site-menu-header">
            <a href="/" className="site-menu-brand" aria-label="Apex Notes homepage">
                <img src={siteLogo} alt="Apex Notes"/>
            </a>
                <button className="btn btn-b2 btn-menu menu-close" id="menu-close" type="button" onClick={onClose} aria-label="Close menu">
                <span className="menu-close-icon" aria-hidden="true"></span>
                </button>
            </div>

            <nav className="site-menu-nav" aria-label="Main navigation">
                <ul className="site-menu-links">
                <li><a href="#home" aria-current="page">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#reviews">ARTICLES</a></li>
                <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>

            <div className="site-menu-footer">
                <p>For people who love driving.</p>
                <a href="#contact">Get in touch</a>
            </div>
        </aside>
        </>
    )
}

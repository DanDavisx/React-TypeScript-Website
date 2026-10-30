import './SiteHeader.css'
import siteLogo from '../brand/apex-notes-logo-white.svg'

type SiteHeaderProps = {
  isMenuOpen: boolean
  onOpenMenu: () => void
}

export default function SiteHeader({isMenuOpen, onOpenMenu,}: SiteHeaderProps) {
    return (
        <header className="site-header">
            <nav className="header-actions" aria-label="Quick navigation">
             <a href="/" className="site-logo" aria-label="Apex Notes homepage">
                <img src={siteLogo} alt="Apex Notes"/>
            </a>
            <a className="btn btn-b1 read-latest-button" href="#contact">Read Latest →</a>
            <button
                className="btn btn-b2 btn-menu menu-toggle"
                id="menu-toggle"
                type="button"
                aria-label="Open menu"
                aria-controls="site-menu"
                aria-expanded={isMenuOpen}
                onClick={onOpenMenu}
            >
                <span className="menu-toggle-line" aria-hidden="true"></span>
                <span className="menu-toggle-line" aria-hidden="true"></span>
            </button>
            </nav>
        </header>
    )
}

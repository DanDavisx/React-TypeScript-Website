type SiteHeaderProps = {
  isMenuOpen: boolean
  onOpenMenu: () => void
}

export default function SiteHeader({isMenuOpen, onOpenMenu,}: SiteHeaderProps) {
    return (
        <header className="site-header">
            <nav className="header-actions" aria-label="Quick navigation">
            <a className="contact-button" href="#contact">READ LATEST →</a>
            <button
                className="menu-toggle"
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
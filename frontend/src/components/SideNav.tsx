export default function SideNav() {
    return (
        <>
        <div className="menu-backdrop" id="menu-backdrop" hidden></div>
        <aside
        className="site-menu"
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        hidden>
            <div className="site-menu-header">
                <a className="site-menu-brand" href="#home" aria-label="DanCars home">DANCARS</a>
                <button className="menu-close" id="menu-close" type="button" aria-label="Close menu">
                <span className="menu-close-icon" aria-hidden="true"></span>
                <span>Close</span>
                </button>
            </div>

            <nav className="site-menu-nav" aria-label="Main navigation">
                <ul className="site-menu-links">
                <li><a href="#home" aria-current="page">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#journal">Journal</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#faq">FAQ</a></li>
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

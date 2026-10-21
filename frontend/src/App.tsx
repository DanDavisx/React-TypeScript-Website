import Header from './components/SiteHeader'
import SideNavigation from './components/SideNav'
import Hero from './components/Hero'
import { useState } from 'react'

  function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  function openMenu() {
    setIsMenuOpen(true)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  
  return (
    <>
      <Header isMenuOpen={isMenuOpen} onOpenMenu={openMenu}/>
      <SideNavigation isOpen={isMenuOpen} onClose={closeMenu}/>
      <Hero />
    </>
  )
}

export default App
import { useState } from 'react'
import { motion } from 'framer-motion'
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'
import { AnimatePresence } from 'framer-motion'
import SadkodevLogo from './icons/SadkodevLogo'

export default function Header({}) {
  const [isActive, setIsActive] = useState(false)

  function isNavActive() {
    setIsActive(!isActive)
  }

  return (
    <motion.header className="header__container">
      <SadkodevLogo />
      <Hamburger open={isActive} handlerClick={isNavActive} />
      <AnimatePresence>
        {isActive && <MobileMenu handlerClick={isNavActive} />}
      </AnimatePresence>
    </motion.header>
  )
}

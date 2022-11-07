import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
export default function MobileMenu({ handlerClick }) {
  const navMobile = useRef()

  useEffect(() => {
    navMobile.current.addEventListener('mousedown', () => {
      handlerClick()
    })
  }, [navMobile, handlerClick])

  return (
    <motion.nav className="mobileNav" exit="hidden" ref={navMobile}>
      <motion.div
        onTouchMove={handlerClick}
        onClick={handlerClick}
        className="btnClosedMenu"></motion.div>
      <Link href={'/'}>home</Link>
      <Link href={'/'}>about</Link>
      <Link href={'/'}>service</Link>
      <Link href={'/'}>contact</Link>
      <Link href={'/'}>skills</Link>
    </motion.nav>
  )
}

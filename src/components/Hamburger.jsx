import { motion } from 'framer-motion'
import { popUp } from '../content/FrameMotionVariants'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Hamburger({ open, handlerClick }) {
  return (
    <motion.div
      style={{ zIndex: 10000 }}
      initial="hidden"
      animate="visible"
      variants={popUp}>
      {!open ? (
        <AiOutlineMenu onClick={handlerClick} size={24} />
      ) : (
        <AiOutlineClose onClick={handlerClick} size={24} />
      )}
    </motion.div>
  )
}

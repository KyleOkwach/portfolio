"use client"
import { motion } from "framer-motion"

const Header = ({ classNames }) => {
  return (
    <section class="container_section">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <h1 className="text_header w-60 max-w-xs">
            Bringing
            <span className="text_special"> designs </span>
            <br className="max-sm:hidden"/>
            and
            <span className="text_special"> ideas </span>
            to life
        </h1>
      </motion.div>
    </section>
  )
}

export default Header
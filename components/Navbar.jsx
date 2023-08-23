"use client"
import { useState } from "react"

import Link from "next/link"
import Hamburger from "hamburger-react"

import { GiHamburgerMenu } from "react-icons/gi"
import { FaSun, FaMoon } from "react-icons/fa"

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const sections = ['about', 'projects', 'contact']

  const toggleTheme = () => {
    setIsDarkMode
  }

  return (
    <nav className="w-full p-3 glass flex flex-h justify-between
    items-center absolute top-0 mt-5"
    >
      <div className="logo">
        <Link
          href="/"
        >
          <h1 className="text-xl">KyleBolo</h1>
        </Link>
      </div>

      {/* menu on normal screens */}
      <div className="sm:flex flex-h gap-5 hidden">
        <button onClick={() => {setIsDarkMode(!isDarkMode)}}>
          {isDarkMode ? (
              <FaSun size={19}/>
            ) : (
              <FaMoon size={19}/>
            )
          }
        </button>
        {sections.map((item, index) => (
          <Link
            className="link_nav"
            href={`#${item}`}
            key = {item + index}
          >
            {item}
          </Link>
        ))}
        {/* <Link
          className="link_nav"
          href="#projects"
        >
          projects
        </Link>
        <Link
          className="link_nav"
          href="#contact"
        >
          contact
        </Link> */}
      </div>

      {/* menu on small screens */}
      <div className="flex flex-h sm:hidden">
        <button onClick={() => {setIsDarkMode(!isDarkMode)}}>
          {isDarkMode ? (
              <FaSun size={19}/>
            ) : (
              <FaMoon size={19}/>
            )
          }
        </button>
        <Hamburger
          toggled={hamburgerOpen}
          toggle={setHamburgerOpen}
          size={19}
        />
        {/* <GiHamburgerMenu /> */}
      </div>
    </nav>
  )
}

export default Navbar
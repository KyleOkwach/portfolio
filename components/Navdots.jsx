"use client"
import Link from 'next/link'

const Navdots = ({ active }) => {
  const sections = ['/', '#about', '#projects', '#contact']

  return (
    <div className="sm:flex hidden flex-col w-10 h-20 absolute left-0 gap-3">
      {sections.map((item, index) => (
        <Link
          href={`${item}`}
          key={item + index}
          className="group"
        >
          <div className="w-3 h-3 navdot group-active:bg-accent
          group-hover:bg-secondary transition-all duration-200"></div>
        </Link>
      ))}
    </div>
  )
}

export default Navdots
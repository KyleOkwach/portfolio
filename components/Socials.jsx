import Link from "next/link"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

const Socials = () => {
    const iconSize = 19

    const socials = [
        {
            Name: "Linkedin",
            Link: "https://www.linkedin.com/in/kyle-bolo-708016277/",
            Icon: <FaLinkedin size={iconSize}/>
        }, {
            Name: "Github",
            Link: "https://github.com/KyleOkwach",
            Icon: <FaGithub size={iconSize}/>
        }, {
            Name: "Twitter",
            Link: "https://twitter.com/bolo_kyle",
            Icon: <FaTwitter size={iconSize}/>
        }
    ]

    return (
        <div className="glass p-2 flex absolute bottom-0 right-0 mb-5">
            <div className="links flex gap-2">
                {socials.map((link, index) => (
                    <Link
                        href={`${link.Link}`}
                        key={link.Name + index}
                        className=" group hover:-translate-y-0.5 transition-all flex relative justify-center
                        duration-200 top-0"
                    >
                        {link.Icon}
                        <span className="group-hover:w-full w-0 h-0.5 absolute bg-accent -bottom-0.5
                        transition-all duration-200"></span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Socials
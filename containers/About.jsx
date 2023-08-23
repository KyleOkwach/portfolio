"use client"
import { motion } from "framer-motion"

import Code from "@/components/Code"

const About = ({ classnames }) => {
    return (
        <section className="container_section">
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "tween" }}
                className="w-full h-full flex debug flex-col items-center justify-center"
            >
                <h3>More about me...</h3>
                <div className="flex flex-row h-full w-full max-sm:flex-col justify-between">
                    <Code />
                    <div className="w-[40%] h-[50%] bg-gray-800">
                        Output
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
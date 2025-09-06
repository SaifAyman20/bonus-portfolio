import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-6 
      bg-gradient-to-br from-indigo-100 via-white to-indigo-200 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <motion.div 
        className="max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Hi, I’m{" "}
          <span className="text-indigo-600 dark:text-teal-400">
            Saif Ayman
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Front-End Developer passionate about creating beautiful and functional
          web experiences.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#projects"
          className="inline-block bg-indigo-600 dark:bg-teal-400 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:scale-110 transition mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-4 mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {[
            { icon: <Mail size={22} />, link: "mailto:yourmail@example.com" },
            { icon: <Linkedin size={22} />, link: "https://linkedin.com" },
            { icon: <Github size={22} />, link: "https://github.com" },
            { icon: <Twitter size={22} />, link: "https://twitter.com" },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              className="p-3 rounded-full bg-indigo-100 dark:bg-teal-900 text-indigo-600 dark:text-teal-300"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

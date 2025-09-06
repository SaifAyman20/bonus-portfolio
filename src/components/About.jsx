import myPic from "../assets/Saif.jpg"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 
      bg-gradient-to-br from-indigo-50 via-white to-indigo-100 
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* صورة شخصية */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-60 h-60">
            <img
              src={myPic}
              alt="Saif Ayman"
              className="w-full h-full object-cover rounded-2xl border-4 
              border-indigo-100 dark:border-gray-700/60 shadow-xl"
            />
            {/* تأثير خلف الصورة */}
            <div
              className="absolute inset-0 rounded-2xl 
              bg-gradient-to-tr from-indigo-400/30 to-purple-400/30 
              dark:from-teal-500/20 dark:to-cyan-400/20 
              blur-2xl -z-10"
            ></div>
          </div>
        </motion.div>

        {/* النص */}
        <motion.div
          className="backdrop-blur-lg bg-white/80 dark:bg-gray-800/40 
          border border-gray-200 dark:border-gray-700/40 
          rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-indigo-700 dark:text-teal-400 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-800 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm <span className="font-semibold">Saif Ayman</span>, a{" "}
            <span className="text-indigo-600 dark:text-teal-400 font-medium">
              Frontend Developer
            </span>{" "}
            passionate about creating modern, responsive, and user-friendly
            websites.
          </motion.p>

          <motion.p
            className="mt-4 text-gray-800 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Skilled in{" "}
            <strong className="text-indigo-600 dark:text-teal-400">
              React, JavaScript, and TailwindCSS
            </strong>
            , I enjoy transforming ideas into digital experiences that are both
            functional and visually appealing.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  Instagram,
  User,
  MessageSquare,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  // Variants للانيميشن
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 
      bg-gradient-to-br from-indigo-50 via-white to-indigo-100 
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* العنوان والنص */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 dark:text-teal-400">
          Get In Touch
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I’d love to hear from you! Whether you have a project in mind or just
          want to say hello — drop me a message.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Social Icons */}
        <motion.div
          className="flex flex-col items-center md:items-start gap-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Connect with me
          </h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {[
              { Icon: Mail, link: "mailto:yourmail@example.com" },
              { Icon: Linkedin, link: "https://linkedin.com" },
              { Icon: Github, link: "https://github.com" },
              { Icon: Twitter, link: "https://twitter.com" },
              { Icon: Facebook, link: "https://facebook.com" },
              { Icon: Instagram, link: "https://instagram.com" },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={link}
                href={link}
                target="_blank"
                className="p-3 rounded-full 
                bg-white/80 dark:bg-gray-800/40 
                backdrop-blur-md border border-gray-200 dark:border-gray-700/40 
                text-indigo-600 dark:text-teal-300 
                hover:scale-110 hover:bg-indigo-100/70 dark:hover:bg-teal-900/40
                transition-all duration-300 shadow-sm"
                custom={i}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="flex flex-col gap-6 
          bg-white dark:bg-gray-800/30 
          backdrop-blur-md p-8 rounded-2xl shadow-md 
          border border-gray-200 dark:border-gray-700/40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Name */}
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 p-3 rounded-lg border border-gray-300 
              bg-gray-50 dark:bg-gray-900/30 
              placeholder-gray-400 dark:placeholder-gray-500
              focus:ring-2 focus:ring-indigo-400 dark:focus:ring-teal-400 
              outline-none text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-10 p-3 rounded-lg border border-gray-300 
              bg-gray-50 dark:bg-gray-900/30 
              placeholder-gray-400 dark:placeholder-gray-500
              focus:ring-2 focus:ring-indigo-400 dark:focus:ring-teal-400 
              outline-none text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-4 text-gray-400"
              size={20}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full pl-10 p-3 rounded-lg border border-gray-300 
              bg-gray-50 dark:bg-gray-900/30 
              placeholder-gray-400 dark:placeholder-gray-500
              focus:ring-2 focus:ring-indigo-400 dark:focus:ring-teal-400 
              outline-none text-gray-900 dark:text-white resize-none"
              required
            />
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold text-lg
            text-white dark:text-gray-900
            bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700
            dark:from-teal-400 dark:via-teal-500 dark:to-teal-600
            hover:scale-[1.03] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

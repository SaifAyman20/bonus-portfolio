import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-teal-400">
          Saif Ayman
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-teal-400 transition font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-gray-300"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-[64px] left-0 right-0 md:hidden flex flex-col gap-4 
                       bg-white dark:bg-gray-800 px-6 py-4 shadow-lg z-40"
          >
            {links.map((link) => (
              <motion.li key={link.name} variants={itemVariants}>
                <a
                  href={link.href}
                  className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-teal-400 transition font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}

            {/* Dark Mode Button */}
            <motion.li variants={itemVariants} className="mt-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

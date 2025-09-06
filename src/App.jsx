import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 
                    bg-gradient-to-b from-indigo-50 via-white to-indigo-100 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

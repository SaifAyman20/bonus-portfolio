import { Code, Layout, Smartphone, Database, Palette } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    { icon: <Code size={32} />, name: "JavaScript" },
    { icon: <Layout size={32} />, name: "React" },
    { icon: <Smartphone size={32} />, name: "Responsive Design" },
    { icon: <Database size={32} />, name: "SQL Basics" },
    { icon: <Palette size={32} />, name: "TailwindCSS" },
  ]

  // إعدادات الأنيميشن للكروت
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  }

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* عنوان القسم */}
        <motion.h2
          className="text-3xl font-bold text-indigo-700 dark:text-teal-400 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        {/* الكروت */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center 
              bg-white shadow-md border border-gray-200 
              rounded-2xl p-6 hover:scale-110 transition 
              dark:bg-gray-800/30 dark:border-gray-700/40"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-indigo-600 dark:text-teal-400 mb-3">
                {skill.icon}
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import pic1 from "../assets/portfolio.png";
import pic2 from "../assets/coffee.png";
import pic3 from "../assets/movieSearchApp.png";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern responsive portfolio using HTML & CSS & JS",
      img: pic1,
    },
    {
      title: "Coffee Shop",
      desc: "A welcoming homepage for a modern coffee shop showcasing its menu and offerings.",
      img: pic2,
    },
    {
      title: "Movie Search App",
      desc: "A clean and functional movie search interface displaying filtered results for a user's query.",
      img: pic3,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 
      bg-gradient-to-br from-indigo-50 via-white to-indigo-100 
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* عنوان Projects */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-indigo-700 dark:text-teal-400 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* كروت المشاريع */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="rounded-2xl overflow-hidden bg-white shadow-md border border-gray-200 
              dark:bg-gray-800/40 dark:border-gray-700/40 transition-all flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{
                y: -8,
                boxShadow: "0px 12px 20px rgba(0,0,0,0.15)",
              }}
            >
              {/* صورة بنسبة أبعاد ثابتة */}
              <div className="overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* نص المشروع */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-teal-400">
                  {p.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 flex-grow">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

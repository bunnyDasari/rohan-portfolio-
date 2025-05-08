import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, Code, Palette, Database, Globe, Server, Shield, ExternalLink, Sparkles, Rocket, Heart, Coffee, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileimg from "./images/_-jaIzsp_400x400.jpg";
import img1 from "./images/premium_photo-1681487870238-4a2dfddc6bcb.jpeg";
import img2 from './images/csm_content_smarthealthcards_cardcontrolledaccess_f29edf0548.jpg';
import img3 from './images/online-course-min.png';

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header/Navigation */}
      <nav className="fixed w-full z-40 bg-zinc-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-display font-bold gradient-text"
            >
              &lt;Rohan Dasari /&gt;
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <NavLink href="#home">🏠 Home</NavLink>
              <NavLink href="#about">👋 About</NavLink>
              <NavLink href="#skills">⚡ Skills</NavLink>
              <NavLink href="#projects">🚀 Projects</NavLink>
              <NavLink href="#contact">📬 Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Profile */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4">
          <motion.div
            style={{ opacity, scale }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="relative group">
                <motion.div
                  className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-white/10 hover:border-white/30 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={profileimg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left order-1 md:order-2"
            >
              <div className="mb-4 flex items-center justify-center md:justify-start space-x-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400 font-display">Welcome to my portfolio</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                MERN Stack{' '}
                <span className="gradient-text">Developer</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl font-light">
                Turning ideas into impactful digital solutions ✨
              </p>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex justify-center space-x-4">
                  <SocialLink
                    href="https://github.com/bunnyDasari"
                    icon={<Github />}
                    label="GitHub"
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/rohandasari369/"
                    icon={<Linkedin />}
                    label="LinkedIn"
                  />
                  <SocialLink
                    href="https://x.com/RohanD07601887"
                    icon={<Twitter />}
                    label="Twitter"
                  />
                  <SocialLink
                    href="mailto:rohandasari098@gmail.com"
                    icon={<Mail />}
                    label="Email"
                  />
                </div>
                <motion.a
                  href="#contact"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-colors flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="w-5 h-5" />
                  <span>Let's Connect</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section with New Taglines */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-display mb-4 block">🌟 ABOUT ME</span>
            <h2 className="text-4xl font-display font-bold mb-4">Turning Ideas Into Reality</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-zinc-800/50 rounded-xl">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-display font-bold mb-2">Problem Solver</h3>
                <p className="text-zinc-400">Turning complex challenges into elegant solutions</p>
              </div>
              <div className="p-6 bg-zinc-800/50 rounded-xl">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-display font-bold mb-2">Innovation Driven</h3>
                <p className="text-zinc-400">Always exploring new technologies and approaches</p>
              </div>
              <div className="p-6 bg-zinc-800/50 rounded-xl">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-display font-bold mb-2">Team Player</h3>
                <p className="text-zinc-400">Collaborating to achieve exceptional results</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-display mb-4 block">💼 EXPERIENCE</span>
            <h2 className="text-4xl font-display font-bold mb-4">Professional Journey</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-zinc-800/50 rounded-xl text-left">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-display font-bold">MERN Stack Developer Intern</h3>
                </div>
                <p className="text-zinc-400 mb-2">Rablo. • Aug-2024 - Nov-2024</p>
                <p className="text-zinc-300">As a MERN Stack Developer, I was responsible for implementing user authentication systems, ensuring secure login and session management. I designed and integrated backend APIs using Node.js and Express.js to facilitate seamless communication between the frontend and MongoDB database. My role also involved developing and optimizing user dashboards, providing intuitive user experiences while ensuring efficient data processing and real-time functionality. Additionally, I collaborated with cross-functional teams to deliver high-performance solutions and maintain application scalability.</p>
              </div>
              <div className="p-6 bg-zinc-800/50 rounded-xl text-left">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-display font-bold">Frontend Developer Intern</h3>
                </div>
                <p className="text-zinc-400 mb-2">Ivory Innovations Pvt Ltd. • Jan-2025 - April-2025</p>
                <p className="text-zinc-300">As a Frontend Developer, I worked extensively with Next.js and Tailwind CSS to build responsive, dynamic, and high-performance web applications. My responsibilities included developing user-friendly interfaces, ensuring smooth navigation and functionality across different devices. I also integrated APIs to enhance application functionality, enabling seamless data exchange between the frontend and backend. Through collaboration with design teams, I implemented clean, scalable, and efficient code, while maintaining a focus on optimizing user experience and performance.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-display mb-4 block">⚡ SKILLS & EXPERTISE</span>
            <h2 className="text-4xl font-display font-bold mb-4">My Technical Skills</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A collection of technologies I've mastered throughout my journey as a developer.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              icon={<Code />}
              title="Frontend Development"
              skills={[
                { name: 'HTML', level: 90 },
                { name: 'CSS', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'React', level: 90 },
                { name: 'Tailwind CSS', level: 95 },
                { name: 'Nextjs', level: 95 },
                { name: 'TypeScript', level: 95 }
              ]}
            />
            <SkillCard
              icon={<Server />}
              title="Backend Development"
              skills={[
                { name: 'Node.js', level: 88 },
                { name: 'Express.js', level: 88 },
                { name: 'Python', level: 82 },
                //{ name: 'PostgreSQL', level: 85 }
              ]}
            />
            <SkillCard
              icon={<Database />}
              title="Database"
              skills={[
                { name: 'MongoDB', level: 90 },
                { name: 'MySQL', level: 85 },
                //{ name: 'Redis', level: 80 }
              ]}
            />
            <SkillCard
              icon={<Globe />}
              title="Web Technologies"
              skills={[
                { name: 'REST APIs', level: 92 },
                //{ name: 'GraphQL', level: 85 },
                { name: 'WebSockets', level: 80 }
              ]}
            />
            <SkillCard
              icon={<Shield />}
              title="Security"
              skills={[
                { name: 'OAuth', level: 88 },
                { name: 'JWT', level: 90 },
                { name: 'HTTPS', level: 85 }
              ]}
            />
            <SkillCard
              icon={<Palette />}
              title="Tools"
              skills={[
                { name: 'Git', level: 85 },
                { name: 'GitHub', level: 85 },
                { name: 'VS Code', level: 90 },
                //{ name: 'Adobe XD', level: 82 }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-display mb-4 block">🚀 FEATURED WORK</span>
            <h2 className="text-4xl font-display font-bold mb-4">Latest Projects</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Explore some of my recent work and personal projects.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Task Manger"
              description="A task manager helps you organize, prioritize, and track your daily to-dos and long-term goals efficiently."
              image={img1}
              tags={['Nextjs', 'Tailwind css', 'Zustand']}
              githubUrl="https://to-do-app-one-kappa-97.vercel.app/"
            />
            <ProjectCard
              title="Patient Smart Card"
              description="The Patient Smart Card project streamlines healthcare by securely storing and accessing patient records using a unified digital identity."
              image={img2}
              tags={['React.js', "Node.js", 'Express.js', 'MongoDb', "JWT Auth"]}
              githubUrl="https://github.com/bunnyDasari/PATIENT-SMART-CARD"

            />
            <ProjectCard
              title="Course Selling app"
              description="A course management system with an admin dashboard to add/remove courses and a user dashboard for browsing available courses."
              image={img3}
              tags={['React.js', "Node.js", 'Express.js', 'MongoDb', "JWT Auth"]}
              githubUrl="https://github.com/bunnyDasari/course-app"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-purple-400 font-display mb-4 block">📬 GET IN TOUCH</span>
            <h2 className="text-4xl font-display font-bold mb-4">Let's Work Together</h2>
            <p className="text-zinc-400 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="mailto:rohandasari098@gmail.com"
                className="flex items-center space-x-2 bg-white text-zinc-900 px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rohandasari369/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[#0077B5] text-white px-8 py-3 rounded-full font-medium hover:bg-[#006399] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-2 text-zinc-400">
              <Coffee className="w-5 h-5" />
              <span>Let's grab a coffee and talk </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center text-zinc-400">
          {/* <p className="flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React & Tailwind</span>
          </p> */}
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-zinc-400 hover:text-white transition-colors relative group font-medium"
      whileHover={{ scale: 1.05 }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all group-hover:w-full" />
    </motion.a>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors group relative"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </motion.a>
  );
}

function SkillCard({ icon, title, skills }: {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; level: number }[]
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800 transition-colors"
    >
      <motion.div
        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-display font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-zinc-300 flex items-center space-x-2"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-zinc-800/50 rounded-xl overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-[#333] text-white rounded-full font-medium flex items-center space-x-2"
          >
            <Github className="w-4 h-4" />
            <span>View Code</span>
          </motion.a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 bg-zinc-700 rounded-full text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default App;
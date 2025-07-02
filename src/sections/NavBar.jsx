import { useState } from "react";
import { motion } from "motion/react"; 

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#home" className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link">About</a>
      </li>
      <li className="nav-li">
        <a href="#projects" className="nav-link">Projects</a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-link">Contact</a>
      </li>
    </ul>
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 text-white p-4">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            FloatingSanity
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
         <motion.img
  key={isOpen ? "close" : "menu"}
  src={isOpen ? "assets/close.png" : "assets/menu.png"}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
  className={`select-none transition-all duration-300 ease-in-out hover:brightness-150 hover:contrast-150 hover:drop-shadow-[0_0_15px_#F719CC] ${
    isOpen ? "w-13 h-13" : "w-18 h-18"
  }`}
  alt="toggle"
/>
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {/* Mobile nav */}
      {isOpen && (
        <motion.div
    className="block overflow-hidden text-center sm:hidden"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    style={{ maxHeight: "100vh" }}
    transition={{ duration: 1 }}
  >
    <nav className="pb-5">
      <Navigation />
    </nav>
  </motion.div>
      )}
    </div>
  );
};

export default NavBar;
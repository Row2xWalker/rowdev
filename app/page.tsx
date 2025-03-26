"use client"
import { FaGithub, FaLinkedin, FaEnvelope, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiLua, SiApachegroovy } from "react-icons/si";


export default function Home() {
  const handleClick = () => {
    const user = "jrenzoandador";
    const domain = "gmail.com";
    window.location.href = `mailto:${user}@${domain}`;
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-sans px-6 text-center">
      {/* Hero Section */}
      <div className="max-w-4xl">
        <h1 className="text-5xl font-extrabold">John Renzo Andador</h1>
        <p className="mt-3 text-xl text-gray-300">Software Engineer • Backend Developer</p>
        <p className="mt-4 text-gray-400">
          I build scalable, efficient backend solutions that bridge the gap between technology and business needs.
        </p>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-5 text-2xl">
          <a href="https://github.com/row2xwalker" target="_blank" className="text-gray-400 hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/jrenzoandador" target="_blank" className="text-gray-400 hover:text-white transition">
            <FaLinkedin />
          </a>
          <button
            onClick={handleClick}
            className="text-gray-400 hover:text-white transition hover:cursor-pointer"
            aria-label="Send an email"
          >
            <FaEnvelope />
          </button>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <div className="mt-4 flex justify-center gap-6 text-4xl text-gray-400">
          <SiLua className="hover:text-blue-400" />
          <SiApachegroovy className="hover:text-gray-500" />
          <FaNodeJs className="hover:text-green-500" />
          <SiExpress className="hover:text-gray-500" />
          <SiNextdotjs className="hover:text-white" />
          <FaReact className="hover:text-blue-400" />
          <SiMongodb className="hover:text-green-400" />
          <SiFirebase className="hover:text-orange-400" />
        </div>
      </div>
    </main>
  );
}
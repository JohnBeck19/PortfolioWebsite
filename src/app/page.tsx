"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: "hop-and-hook",
      title: "Hop and Hook",
      description: "A 2D platforming fishing game where you navigate through challenging levels while mastering the art of fishing. As the lead artist, I crafted the visual style and animations for this Steam release. Swing with your rod, explore open-ended zones, and catch over 100 unique fish—some of which fight back in reactive boss encounters.",
      tags: ["2D Platformer", "Fishing", "Steam", "Released", "Unity"],
      link: "https://store.steampowered.com/app/3781950/Hop_n_Hook/",
      images: ["/projects/hop-and-hook/1.png", "/projects/hop-and-hook/2.png", "/projects/hop-and-hook/3.png"]
    },
    {
      id: "opie",
      title: "Opie",
      description: "A 3D roguelike where players must navigate through the shadows to survive. Test your skills in this challenging survival experience.",
      tags: ["3D", "Roguelike", "Unity"],
      link: "https://jbeck.itch.io/opie",
      images: ["/projects/opie/1.png", "/projects/opie/2.png", "/projects/opie/3.png"]
    },
    {
      id: "augma",
      title: "Augma",
      description: "A metroidvania-style game featuring procedural generation. Explore a vast, ever-changing world filled with secrets and challenges.",
      tags: ["Metroidvania", "Procedural Generation", "In Development", "Unity"],
      link: "#",
      images: ["/projects/augma/1.png", "/projects/augma/2.png"]
    },
    {
      id: "tripped-up",
      title: "Tripped Up!",
      description: "A challenging sports game where you must cross up the neighborhood without dropping the ball. Test your precision and timing!",
      tags: ["Sports", "Browser Game", "Unity"],
      link: "https://jbeck.itch.io/tripped-up",
      images: ["/projects/tripped-up/1.png", "/projects/tripped-up/2.png", "/projects/tripped-up/3.png"]
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hi, I'm John Beck</h1>
          <p className="text-xl md:text-2xl mb-8">Game Developer & Full Stack Developer</p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              View My Work
            </a>
            <a href="#skills" className="bg-purple-600/20 hover:bg-purple-600/30 text-white font-bold py-3 px-8 rounded-full transition duration-300 border border-purple-500/50">
              Skills
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300">
            <p className="mb-6">
              I'm an aspiring game development student at Neumont College. I've been playing games since my childhood and always dreamed of making my own. Now I'm turning that dream into reality by creating engaging and innovative gaming experiences.
            </p>
            <p>
              My passion lies in combining technical skills with creative game design to build immersive worlds and memorable gameplay experiences. I'm constantly learning and exploring new technologies to push the boundaries of what's possible in game development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
          <div className="flex flex-col gap-16">
            {projects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={project.id}
                  className={`bg-black/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-purple-500/20 flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Image Section */}
                  <div className="md:w-1/2 flex items-center justify-center p-6">
                    {project.images.length > 0 ? (
                      <div className="relative w-full h-64 max-w-xl flex items-center justify-center">
                        <Image
                          src={project.images[currentImageIndex % project.images.length]}
                          alt={`${project.title} screenshot`}
                          fill
                          className="object-contain rounded-lg bg-black"
                        />
                        {/* Navigation Dots */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full ${
                                currentImageIndex % project.images.length === index ? 'bg-purple-500' : 'bg-gray-500'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-48 rounded-lg bg-purple-900/20 flex items-center justify-center border border-purple-500/20">
                        <p className="text-purple-300 text-lg">Coming Soon</p>
                      </div>
                    )}
                  </div>
                  {/* Text Section */}
                  <div className="md:w-1/2 flex flex-col justify-center p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" 
                        className="inline-block text-purple-400 hover:text-purple-300 transition-colors">
                        {project.link.includes("itch.io") ? "Play on itch.io →" : 
                         project.link.includes("steampowered.com") ? "View on Steam →" : 
                         "View Project →"}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-purple-900/20 p-6 rounded-lg border border-purple-500/20">
              <div className="text-4xl mb-2">💻</div>
              <h3 className="font-bold mb-2">Languages</h3>
              <p className="text-gray-300">C#, C++, C, Python, Java, HTML, JavaScript, SQL, CSS</p>
            </div>
            <div className="text-center bg-purple-900/20 p-6 rounded-lg border border-purple-500/20">
              <div className="text-4xl mb-2">🛠️</div>
              <h3 className="font-bold mb-2">Frameworks / Engines / Tools</h3>
              <p className="text-gray-300">Unity, .NET, Unreal Engine, React, Godot, REST API, Next.js, Node.js, Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://jbeck.itch.io/" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Visit My itch.io
            </a>
            <a href="https://www.linkedin.com/in/john-beck-1436ab2ba/" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Connect on LinkedIn
            </a>
            <a href="https://github.com/JohnBeck19" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              View GitHub
            </a>
          </div>
          <a href="/resume/john-beck-resume.pdf" download className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 border border-purple-500/50 mt-8">
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}

"use client";

import { FaRegClone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import React from "react"; // Added for useEffect

const profile = {
  username: "johnbeck.dev",
  name: "John Beck",
  bio: `Aspiring game developer at Neumont College. Always learning and pushing boundaries!`,
  skills: [
    "C#", "C++", "C", "Python", "Java", "HTML", "JavaScript", "SQL", "CSS",
    "Unity", "Unreal Engine", "React", "Godot", "REST API", "Next.js", "Node.js", "Git"
  ],
  monstersConsumed: 999, // Fun stat
  resume: "/resume/john-beck-resume.pdf",
  linkedin: "https://www.linkedin.com/in/john-beck-1436ab2ba/",
  avatar: "/pfp.png"
};

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

export default function Home() {
  const [modalProject, setModalProject] = useState(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Animate modal open/close
  React.useEffect(() => {
    if (modalProject) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [modalProject]);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-8 px-2">
      {/* Profile Header */}
      <section className="w-full max-w-3xl flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex flex-col items-center w-full md:w-auto">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-purple-500 bg-black">
            <Image src={profile.avatar} alt="Profile" width={144} height={144} className="object-cover" />
          </div>
        </div>
        {/* Profile Info */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          {/* Username and Buttons */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 w-full mb-4">
            <span className="text-2xl font-semibold text-white">{profile.username}</span>
            <div className="flex gap-2">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-1.5 px-6 rounded-lg transition text-sm"><FaEnvelope /> Message</a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-1.5 px-6 rounded-lg transition text-sm">Resume</a>
            </div>
          </div>
          {/* Stats */}
          <div className="flex gap-8 mb-4 text-white text-sm">
            <span><span className="font-bold">{projects.length}</span> posts</span>
            <span><span className="font-bold">{profile.skills.length}</span> skills</span>
            <span><span className="font-bold">{profile.monstersConsumed}</span> Monsters consumed</span>
          </div>
          {/* Name and Bio */}
          <span className="font-semibold text-white mb-1">{profile.name}</span>
          <p className="text-gray-300 mb-2">{profile.bio}</p>
          {/* Skills as hashtags */}
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, i) => (
              <span key={i} className="text-purple-300 text-xs">#{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="w-full max-w-3xl">
        <div className="grid grid-cols-3 gap-2">
          {projects.map((project) => (
            <div key={project.id} className="relative aspect-square bg-black cursor-pointer group border border-purple-500/10" onClick={() => { setModalProject(project); setModalImageIdx(0); }}>
              <Image src={project.images[0]} alt={project.title} fill className="object-cover group-hover:opacity-80 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* Animated Instagram-style Modal for Project Details */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setModalProject(null)}>
          <div
            className={`relative bg-black rounded-xl shadow-2xl border border-purple-500/40 w-full max-w-5xl mx-2 flex flex-col md:flex-row overflow-hidden transition-all duration-300 ease-out
              ${showModal ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
            onClick={e => e.stopPropagation()}
            style={{ minHeight: '500px' }}
          >
            {/* Image Section */}
            <div className="md:w-2/3 w-full bg-black flex items-center justify-center relative aspect-square md:aspect-auto min-h-[350px]">
              <Image src={modalProject.images[modalImageIdx]} alt={modalProject.title} fill className="object-contain bg-black" />
              {modalProject.images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {modalProject.images.map((_, idx) => (
                    <button key={idx} className={`w-2 h-2 rounded-full ${modalImageIdx === idx ? 'bg-purple-500' : 'bg-gray-500'}`} onClick={() => setModalImageIdx(idx)} />
                  ))}
                </div>
              )}
              {modalProject.images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-purple-700 transition"
                    onClick={() => setModalImageIdx((modalImageIdx - 1 + modalProject.images.length) % modalProject.images.length)}
                  >&lt;</button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-purple-700 transition"
                    onClick={() => setModalImageIdx((modalImageIdx + 1) % modalProject.images.length)}
                  >&gt;</button>
                </>
              )}
            </div>
            {/* Details Section */}
            <div className="md:w-1/3 w-full flex flex-col p-4 md:p-6 relative text-left">
              <button className="absolute top-2 right-2 text-purple-300 hover:text-white text-2xl" onClick={() => setModalProject(null)}>&times;</button>
              <h3 className="text-2xl font-bold text-white mb-2 mt-8 md:mt-0">{modalProject.title}</h3>
              <p className="text-gray-300 mb-3">{modalProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {modalProject.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">{tag}</span>
                ))}
              </div>
              {modalProject.link !== "#" && (
                <a href={modalProject.link} target="_blank" rel="noopener noreferrer" className="inline-block text-purple-400 hover:text-purple-300 transition-colors font-bold">{modalProject.link.includes("itch.io") ? "Play on itch.io →" : modalProject.link.includes("steampowered.com") ? "View on Steam →" : "View Project →"}</a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

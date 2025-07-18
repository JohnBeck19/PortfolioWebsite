import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Beck - Game Developer Portfolio",
  description: "Game Developer & Full Stack Developer Portfolio showcasing Unity games and web development projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        {/* Main Content */}
        <div>
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-black text-white py-8 border-t border-purple-500/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>© 2024 John Beck. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://jbeck.itch.io/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                  itch.io
                </a>
                <a href="https://github.com/JohnBeck19" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/john-beck-1436ab2ba/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

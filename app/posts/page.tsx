//Página de posts do blog
export default function Posts() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-mono">
      {/* Header */}
      <header className="bg-black border-b border-gray-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h2 className="text-2xl font-bold text-white tracking-wider">
              WANDERLUST
            </h2>
            <nav className="space-x-8">
              <a
                href="/"
                className="text-gray-400 hover:text-white transition-colors duration-300 uppercase text-sm"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition-colors duration-300 uppercase text-sm"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-300 uppercase text-sm"
              >
                Contact
              </a>
              <a
                href="/posts"
                className="text-gray-400 hover:text-white transition-colors duration-300 uppercase text-sm"
              >
                Posts
              </a>
              <a
                href="/gallery"
                className="text-gray-400 hover:text-white transition-colors duration-300 uppercase text-sm"
              >
                Gallery
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center bg-black">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-extrabold text-white mb-6 tracking-widest">
            POSTS
          </h1>
          <p className="text-lg text-gray-500 max-w-lg mx-auto uppercase tracking-wide">
            Welcome to our blog! Here you'll find a collection of travel
            stories, tips, and guides to inspire your next adventure.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 uppercase text-sm">
            &copy; 2023 Wanderlust. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

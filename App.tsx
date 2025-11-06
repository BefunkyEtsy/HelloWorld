import React from 'react';

const App: React.FC = () => {
  const handleButtonClick = () => {
    alert('Hello, World from GitHub Pages!');
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center font-sans p-4 transition-colors duration-500">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 sm:p-12 max-w-lg w-full text-center transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 bg-[length:200%_200%] animate-gradient-x">
            Hello, World!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            This is a simple, responsive web app built with React and Tailwind CSS.
          </p>
          <button
            onClick={handleButtonClick}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold rounded-full hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Click Me!
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;

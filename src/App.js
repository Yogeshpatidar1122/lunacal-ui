import React from 'react';
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white p-8">
      {/* Left Side - Empty */}
      <div className="w-1/2"></div>
      
      {/* Right Side - Widgets */}
      <div className="w-1/2 flex flex-col space-y-8">
        <AboutMe />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
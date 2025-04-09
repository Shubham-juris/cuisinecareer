import React from 'react'
import { useState } from 'react';
const Subposition = () => {
    const [zoomLevelBrowse, setZoomLevelBrowse] = useState(1);
  const [zoomLevelPost, setZoomLevelPost] = useState(1);

  const handleZoomInBrowse = () => {
    setZoomLevelBrowse((prev) => Math.min(prev + 0.1, 1.5)); // Zoom in, max 1.5x
  };

  const handleZoomOutBrowse = () => {
    setZoomLevelBrowse((prev) => Math.max(prev - 0.1, 1));   // Zoom out, min 1x
  };

  const handleZoomInPost = () => {
    setZoomLevelPost((prev) => Math.min(prev + 0.1, 1.5)); // Zoom in, max 1.5x
  };

  const handleZoomOutPost = () => {
    setZoomLevelPost((prev) => Math.max(prev - 0.1, 1));   // Zoom out, min 1x
  };
  return (
    <div className='items-center flex justify-center'>
      <div className="flex flex-col md:flex-row gap-4 p-4 items-center">
      {/* Browse Positions Card */}
      <div
        className="relative rounded-md shadow-md overflow-hidden transition-transform duration-300 cursor-zoom-in"
        style={{ transform: `scale(${zoomLevelBrowse})` }}
        onMouseEnter={handleZoomInBrowse}
        onMouseLeave={handleZoomOutBrowse}
      >
        <img
          src="cuisine5.jpg" // Replace with your actual image URL
          alt="Browse Positions"
          className="w-100 h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center  text-md text-white text-center">
          <h3 className="text-2xl font-bold">BROWSE THE POSITIONS</h3>
        
        </div>
      </div>

      {/* Post an Opportunity Card */}
      <div
        className="relative rounded-md shadow-md overflow-hidden transition-transform duration-300 cursor-zoom-in"
        style={{ transform: `scale(${zoomLevelPost})` }}
        onMouseEnter={handleZoomInPost}
        onMouseLeave={handleZoomOutPost}
      >
        <img
          src="cuisine6.jpg" // Replace with your actual image URL
          alt="Post an Opportunity"
          className="w-100 h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center  text-white text-center">
          <h3 className="text-xl font-bold">POST AN OPPORTUNITY</h3>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Subposition

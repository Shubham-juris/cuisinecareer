
import React from 'react'

const Front = () => {
  return (
    <div>
        <div
      className="relative bg-cover bg-center bg-fixed h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url('cuisine5.jpg')` }} // Replace with your image path
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for better text contrast */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          WELCOME ABOARD FOOD ENTHUSIASTS! LET'S COOK UP SUCCESS TOGETHER
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover fulfilling opportunities in food, farms, nonprofits, education, and government careers.
        </p>
        <button className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          EXPLORE CAREERS
        </button>
      </div>

      {/* Image Over the Background (adjust positioning as needed)
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end pointer-events-none">
        <img
          src="cuisine13.jpg" // Replace with your left spoon image path
          alt="Spoon with Salt"
          className="max-h-48 md:max-h-64 lg:max-h-80"
        />
        <img
          src="cuisinje12.jpg" // Replace with your right spoon image path
          alt="Spoon with Spice"
          className="max-h-48 md:max-h-64 lg:max-h-80"
        />
      </div> */}
    </div>
    </div>
  )
}

export default Front

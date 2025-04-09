
import React from 'react'

const Subjoin = () => {
  return (
    <div>
      <div className="py-12 bg-gray-50">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why post with us?</h2>
        <ul className="list-decimal list-inside text-gray-700 mb-8">
          <li className="mb-2">
            <span className="font-semibold">Food-Centric:</span> We specialize in sourcing
            top talent for local food businesses, nonprofits, and organic farms.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Integrity:</span> With years of dedication to
            the local food community, we're committed to your mission.
          </li>
          <li>
            <span className="font-semibold">Results:</span> Our proven track record ensures
            superior hiring outcomes—<span className="font-bold">guaranteed</span>
          </li>
        </ul>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline">
          VIEW JOBS
        </button>
      </div>
    </div>          
    </div>
  )
}

export default Subjoin

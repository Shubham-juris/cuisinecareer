
import React from 'react';

const Jobsub = ({
  title,
  employer,
  location,
  description,
  datePosted,
  dateExpiry,
  details,
  overview,
  hiringPositions,
  wageInformation,
  applicationInstructions,
  recruitingTeamInfo,
}) => {
  return (
    <div className="bg-white py-8 px-4 md:px-6 lg:px-8 rounded-lg shadow-md">
      {/* Title */}
      {title && (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        </div>
      )}

      {/* Employer and Location */}
      {(employer || location) && (
        <p className="text-gray-700 mb-3 text-center">
          {employer && <span className="font-semibold">Employer:</span>}{' '}
          {employer && location ? `${employer}; ` : employer}
          {location && <span className="font-semibold">Location:</span>}{' '}
          {location}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="text-gray-600 leading-relaxed mb-5">
          {description}
        </p>
      )}

      {/* Dates */}
      {(datePosted || dateExpiry) && (
        <div className="text-sm text-gray-500 mb-4">
          {datePosted && <p><span className="font-semibold">Data of posting:</span> {datePosted}</p>}
          {dateExpiry && <p><span className="font-semibold">Data of expiry:</span> {dateExpiry}</p>}
        </div>
      )}

      {/* Details Section */}
      {details && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Details</h3>
          {Array.isArray(details) ? (
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 leading-relaxed">{details}</p>
          )}
        </div>
      )}

      {/* Overview Section */}
      {overview && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Overview</h3>
          <p className="text-gray-600 leading-relaxed mb-5">{overview}</p>
        </div>
      )}

      {/* Hiring Positions Section */}
      {hiringPositions && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">We are currently hiring for the following positions</h3>
          <p className="text-gray-600 leading-relaxed mb-5">{hiringPositions}</p>
        </div>
      )}

      {/* Wage Information Section */}
      {wageInformation && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Select your preferred position in the application process</h3>
          <p className="text-gray-600 leading-relaxed">Wages: Wages depend on experience and education.</p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-2">
            {wageInformation.map((wage, index) => (
              <li key={index}>{wage}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Application Instructions Section */}
      {applicationInstructions && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Apply Now</h3>
          {Array.isArray(applicationInstructions) ? (
            <ul className="list-disc list-inside text-indigo-600 leading-relaxed">
              {applicationInstructions.map((instruction, index) => (
                <li key={index}>
                  {instruction.startsWith('Apply online at:') ? (
                    <a href={instruction.split(': ')[1]} target="_blank" rel="noopener noreferrer" className="underline">
                      {instruction.split(': ')[1]}
                    </a>
                  ) : (
                    instruction
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-indigo-600 leading-relaxed">
              {applicationInstructions.startsWith('Apply online at:') ? (
                <a href={applicationInstructions.split(': ')[1]} target="_blank" rel="noopener noreferrer" className="underline">
                  {applicationInstructions.split(': ')[1]}
                </a>
              ) : (
                applicationInstructions
              )}
            </p>
          )}
        </div>
      )}

      {/* Work in the Rockies Recruiting Team Section */}
      {recruitingTeamInfo && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Work in the Rockies Recruiting Team</h3>
          <p className="text-gray-600 leading-relaxed">{recruitingTeamInfo}</p>
        </div>
      )}
    </div>
  );
};

export default Jobsub;
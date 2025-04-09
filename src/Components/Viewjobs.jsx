
import React from "react";
import Jobsub from "../Pages/Jobmain/Jobsub";

const Viewjobs = () => {
    const jobData = {
        title: 'CHEFS, COOKS, LINE COOKS, DISHWASHERS',
        employer: 'Moraine Lake Lodge',
        location: 'Lake Louise, Alberta',
        description:
          'Imagine a summer living beneath towering mountain peaks, venturing along world-class hiking trails, paddling iridescent turquoise waters, forming friendships that will last a lifetime, and providing extraordinary guest service at a mountain lodge like no other. Find all of this (and more!) as part of our team this summer at Moraine Lake Lodge.',
        datePosted: 'April, 01, 2024',
        dateExpiry: 'September, 01, 2024',
        details: [
          'Our summer season runs from May 25th, 2024, to October 2nd, 2024.',
          'We are looking for candidates that can...',
          'Candidates must be legally entitled to work in Canada.',
          'We are unable to support work permit applications.',
        ],
        overview:
          'Located in the heart of the Canadian Rocky Mountains, Moraine Lake Lodge offers a unique opportunity for those who want to live, work, and explore in Canada\'s Rocky Mountains and National Parks. Spend your time off exploring some of the most amazing natural attractions and activities Canada has to offer, including hiking, biking, river rafting and more! Just 15 minutes away from the town of Lake Louise, Moraine Lake Lodge is located perfectly in between Lake Louise in Banff and Yoho National Park. If this sounds like your kind of workplace, you love the outdoors and are passionate about sharing an amazing Canadian experience with our guests from around the world then we want you to join our team!',
        hiringPositions: 'Sous Chef, Chef Tournant, Line Cook, Breakfast Cook, Staff Chef, Dishwasher,',
        wageInformation: [
          'Sous Chef - $26 - $28 per hour',
          'Chef Tournant - $24 - $26 per hour',
          'Line Cook / Breakfast Cover - $23 - $25 per hour',
          'Staff Chef / Cafe Prep - $20 per hour',
          'Dishwasher - $19 per hour',
        ],
        applicationInstructions: [
          'If this sounds like the adventure for you, fill out our application, and attach your resume. We look',
          'forward to reviewing your submission.',
          'Apply online at: Capilano Group - Lodges - Career Page (applytojob.com)',
        ],
        recruitingTeamInfo:
          'Moraine Lake Lodge is a part of the Capilano Group of Companies. The Capilano Group comprises of retail, hospitality and tourism-based businesses anchored by Capilano Suspension Bridge Park in North Vancouver, British Columbia. Capilano Group\'s other properties also include Moraine Lake Lodge, Moraine Lake Trading and Cathedral Mountain Lodge in the Canadian Rockies, Stanley Park Pavilion, Stanley\'s Bar & Grill and Prospect Point Bar & Grill and Trading Post in Stanley Park, Vancouver.',
      };
  return (
    <div className="py-5"> {/* Added some basic Tailwind classes */}
      <div className=" text-start mx-auto"> {/* Added a container for better layout */}
        <Jobsub {...jobData} />
      </div>
    </div>
  );
};

export default Viewjobs;
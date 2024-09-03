import React, { useState } from 'react';

function AboutMe() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      {/* Centered Heading */}
      <div className="flex justify-center bg-gray-900 mb-4 space-x-10 rounded-full">
        {['about', 'experiences', 'recommended'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded-2xl hover:scale-110 shadow-md transition-all ease-in-out ${
              activeTab === tab 
                ? 'bg-black text-white shadow-lg' 
                : ' text-gray-300'
            } hover:bg-black`}
          >
            {tab === 'about' ? 'About Me' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="mt-6 max-h-32 overflow-y-auto">
        {activeTab === 'about' && (
          <p className="text-gray-300">
            I’m Yogesh Patidar, a passionate and driven Full Stack Developer with a strong background in the MERN stack (MongoDB, Express.js, React.js, Node.js) and a knack for creating scalable web applications.<br>
            </br> I hold a Bachelor of Engineering in Computer Science and Engineering and have hands-on experience with various modern technologies.
            
          </p>
        )}
        {activeTab === 'experiences' && (
           <p className="text-gray-300">
           My journey in software development began with a deep interest in creating scalable and efficient applications. Over the years, I have developed a strong foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js) through various projects and professional experiences. 
            <br/>
            Truly Talk : Developed a Next.js and React-based platform allowing users to send anonymous messages through profile URLs. Implemented features like NextAuth for validation, email OTP verification, and a responsive design using ShadCN and Tailwind CSS.
            <br/>
           ChatApp: Created a real-time messaging application with features such as group chats, media sharing, and flexible authentication. Leveraged technologies like Next.js, MongoDB, Prisma, and NextAuth.js to deliver a robust user experience.
           <br/>
       
           These experiences have honed my skills in full-stack development, project management, and working collaboratively in a team environment.
         </p>
        )}
        {activeTab === 'recommended' && (
          <p className="text-gray-300">
            I highly recommend the following books for anyone in sales: "The Challenger Sale" by Matthew Dixon and Brent Adamson...
          </p>
        )}
      </div>
    </div>
  );
}

export default AboutMe;

import React from 'react';
import Image from 'next/image';

const privacyData = [
  {
    id: 1,
    icon: '/assets/privacy1.png', 
    title: 'Introduction & Scope',
    content: 'We are committed to protecting your personal information. This policy details how we handle data for our platform services.',
  },
  {
    id: 2,
    icon: '/assets/privacy2.png',
    title: 'Information We Collect',
    content: [
      'Personal Data (e.g., Name, Email)',
      'Device Data (e.g., IP, Type)',
      'Usage Data (e.g., Feature usage)', 
    ],
  },
  {
    id: 3,
    icon: '/assets/privacy3.png',
    title: 'How We Use Your Data',
    content: [
      'To provide and manage services',
      'To personalize learning content',
      'To send service and promotional updates',
    ],
  },
  {
    id: 4,
    icon: '/assets/privacy4.png',
    title: 'Sharing Your Information',
    content: [
      'We never sell your personal data.',
      'Limited sharing with trusted service partners.',
      'As required by legal obligations.',
    ],
  },
  {
    id: 5,
    icon: '/assets/privacy5.png',
    title: 'Your Data Rights',
    content: [
      'Access and Update profile details.',
      'Request account or data deletion.',
      'Opt-out of non-essential emails.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f4f6ff] text-[#1C1C1E] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d1b2a] mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-base text-gray-600 font-medium">
            Last Updated: May 2026
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-6">
          {privacyData.map((section) => (
            <div 
              key={section.id} 
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8 rounded-[2rem] bg-white shadow-sm border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon Container - INCREASED SIZE HERE */}
              {/* Changed from w-20 h-20 to w-24 h-24 (mobile) and sm:w-32 sm:h-32 (desktop) */}
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                <Image 
                  src={section.icon} 
                  alt={`${section.title} Icon`} 
                  width={128}  
                  height={128} 
                  className="object-contain drop-shadow-sm"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
                <h2 className="text-2xl font-bold text-[#0d1b2a] mb-2">
                  {section.title}
                </h2>
                
                {Array.isArray(section.content) ? (
                  <ul className="space-y-1 inline-block text-left">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-800 text-[16px] font-medium">
                        <span className="mr-2 text-[#0d1b2a] text-lg leading-tight">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[16px] text-gray-800 font-medium leading-relaxed max-w-2xl">
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-bold text-[#0d1b2a] mb-1">
            Still Have Questions?
          </h3>
          <p className="text-gray-700 font-medium">
            Contact our Privacy Team at{' '}
            <a 
              href="mailto:privacy@digrozlearning.com" 
              className="text-[#0d1b2a] hover:underline"
            >
              privacy@digrozlearning.com
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
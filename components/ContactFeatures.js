import { FiPhoneCall } from 'react-icons/fi';
import { AiTwotoneMail } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr';
import { MdOutlineGroupAdd } from 'react-icons/md';

export default function ContactFeatures() {
  const features = [
    {
      title: "Call Us",
      icon: FiPhoneCall,
      details: ["+91 88XXXXXXX", "Mon-Fri 10AM - 6PM"],
    },
    {
      title: "Email Us",
      icon: AiTwotoneMail,
      details: ["digroz59@gmail.com", "General inquiries", "& support."],
    },
    {
      title: "Our Office",
      icon: GrMapLocation,
      details: ["123 Learning Lane,", "Suite 400, New Delhi 110001", "(Illustrative Address)"],
    },
    {
      title: "Connect With Us",
      icon: MdOutlineGroupAdd,
      details: ["@digrozlearning", "on social media", "Follow for updates"],
    },
  ];

  return (
    <section className="w-full bg-[#f4f6ff] py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-8">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a202c]">
            Features
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon Container */}
                <div className="mb-6 flex items-center justify-center text-[#6f86e8]">
                  {/* Using a consistent size. 
                    The text color from the parent div applies cleanly to most react-icons.
                  */}
                  <Icon size={64} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                
                {/* Details */}
                <div className="space-y-1 text-gray-700 font-medium text-[15px]">
                  {item.details.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
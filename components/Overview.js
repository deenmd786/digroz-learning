import Image from 'next/image';

// Array to hold the feature card data
const featuresData = [
  {
    id: 1,
    title: "Chapter-wise Notes",
    description: "Organized book organized syllabus",
    iconSrc: "/assets/icon1.png", // Matches public/assets/icon1.png
  },
  {
    id: 2,
    title: "Chapter-wise Quizzes",
    description: "Instant results, instant results",
    iconSrc: "/assets/icon2.png", 
  },
  {
    id: 3,
    title: "Full Mock Test Series",
    description: "Real exam simulation, and analytics",
    iconSrc: "/assets/icon3.png", 
  },
  {
    id: 4,
    title: "Performance Analytics",
    description: "Track score improvement",
    iconSrc: "/assets/icon4.png", 
  }
];

export default function Overview() {
  return (
    <section className="w-full bg-[#F8FAFF] py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <div className="pb-8 sm:pb-12">
          {/* Top Overview Text */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141C3A] mb-4 sm:mb-6">
            Overview
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-10 sm:mb-14">
            A complete platform to help you prepare effectively for NISM and All competitive exams with structured content, smart quizzes, and realistic mock tests.
          </p>
        </div>

        {/* Features Heading */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141C3A] mb-8 sm:mb-12">
          Features
        </h3>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 w-full">
          {featuresData.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-[1.5rem] p-6 sm:p-8 flex flex-col items-center justify-start shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-5 sm:mb-6">
                <Image
                  src={feature.iconSrc}
                  alt={feature.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, 100px"
                />
              </div>
              
              {/* Card Text */}
              <h4 className="text-lg sm:text-xl font-bold text-[#141C3A] leading-tight mb-2 sm:mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
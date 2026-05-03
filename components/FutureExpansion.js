import Image from 'next/image';

const examsData = [
  {
    id: 1,
    title: 'UPSC',
    image: '/assets/upsc.png',
    // Added inset shadow for inner glow
    glowStyle: 'border-[#4A6BFF] shadow-[0_0_20px_rgba(74,107,255,0.4),inset_0_0_20px_rgba(74,107,255,0.4)]', 
  },
  {
    id: 2,
    title: 'SSC',
    image: '/assets/ssc.png',
    // Added inset shadow for inner glow
    glowStyle: 'border-[#B25AFF] shadow-[0_0_20px_rgba(178,90,255,0.4),inset_0_0_20px_rgba(178,90,255,0.4)]', 
  },
  {
    id: 3,
    title: 'Banking',
    image: '/assets/banking.png',
    // Added inset shadow for inner glow
    glowStyle: 'border-[#4A6BFF] shadow-[0_0_20px_rgba(74,107,255,0.4),inset_0_0_20px_rgba(74,107,255,0.4)]', 
  },
  {
    id: 4,
    title: 'Railway',
    image: '/assets/railway.png',
    // Added inset shadow for inner glow
    glowStyle: 'border-[#B25AFF] shadow-[0_0_20px_rgba(178,90,255,0.4),inset_0_0_20px_rgba(178,90,255,0.4)]', 
  },
];

export default function FutureExpansion() {
  return (
    <section className="w-full bg-[#F8FAFF] py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-[#141C3A] rounded-[2rem] py-16 px-6 md:px-12 text-center shadow-xl">
        
        {/* Headings */}
        <h3 className="text-gray-300 text-lg md:text-xl font-medium mb-2 tracking-wide">
          Future Expansion
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-16">
          Coming Soon: All Government Exams
        </h2>

        {/* Timeline/Cards Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Background Connecting Line (Visible only on medium screens and up) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-white/20 -translate-y-1/2 z-0"></div>

          {/* Cards Grid/Flex */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
            {examsData.map((exam, index) => (
              <div key={exam.id} className="relative flex items-center justify-center flex-1">
                
                {/* The Card */}
                <div 
                  className={`relative bg-[#1E2749] w-36 h-40 md:w-40 md:h-44 rounded-2xl border flex flex-col items-center justify-center transition-transform hover:-translate-y-2 duration-300 ${exam.glowStyle}`}
                >
                  {/* Upcoming Badge */}
                  <span className="absolute -top-3.5 -right-6 bg-[#FFC582] text-[#141C3A] text-xs font-bold px-3 py-1 rounded-full border-4 border-[#141C3A]">
                    Upcoming
                  </span>

                  {/* Icon/Logo */}
                  <div className="relative w-12 h-12 md:w-14 md:h-14 mb-4">
                    <Image
                      src={exam.image}
                      alt={`${exam.title} Exam Logo`}
                      width={700}
                      height={700}
                      className="object-cover w-full h-full" 
                      sizes="60px"
                    />
                  </div>

                  {/* Title */}
                  <span className="text-white font-bold text-lg md:text-xl tracking-wide">
                    {exam.title}
                  </span>
                </div>

                {/* Connecting Arrow between cards (Hidden on mobile) */}
                {index < examsData.length - 1 && (
                  <div className="hidden md:flex absolute -right-6 lg:-right-8 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center bg-[#141C3A] z-20">
                    <svg 
                      className="w-4 h-4 text-white/50" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
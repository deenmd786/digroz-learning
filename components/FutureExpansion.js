import Image from 'next/image';

const examsData = [
  {
    id: 1,
    title: 'UPSC',
    image: '/assets/upsc.png',
    glowStyle: 'border-[#4A6BFF] shadow-[0_0_20px_rgba(74,107,255,0.4),inset_0_0_20px_rgba(74,107,255,0.4)]', 
  },
  {
    id: 2,
    title: 'SSC',
    image: '/assets/ssc.png',
    glowStyle: 'border-[#B25AFF] shadow-[0_0_20px_rgba(178,90,255,0.4),inset_0_0_20px_rgba(178,90,255,0.4)]', 
  },
  {
    id: 3,
    title: 'Banking',
    image: '/assets/banking.png',
    glowStyle: 'border-[#4A6BFF] shadow-[0_0_20px_rgba(74,107,255,0.4),inset_0_0_20px_rgba(74,107,255,0.4)]', 
  },
  {
    id: 4,
    title: 'Railway',
    image: '/assets/railway.png',
    glowStyle: 'border-[#B25AFF] shadow-[0_0_20px_rgba(178,90,255,0.4),inset_0_0_20px_rgba(178,90,255,0.4)]', 
  },
];

export default function FutureExpansion() {
  return (
    <section className="w-full bg-[#F8FAFF] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto bg-[#141C3A] rounded-4xl py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-16 text-center shadow-2xl relative">
        
        {/* Headings */}
        <h3 className="text-[#8B98C6] text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 uppercase tracking-wider">
          Future Expansion
        </h3>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 lg:mb-20">
          Coming Soon: All Government Exams
        </h2>

        {/* Timeline/Cards Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Background Connecting Line (Visible only on Desktop/Large screens) */}
          <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>

          {/* Cards Container (Stack on mobile, 2x2 Grid on tablet, Flex Row on desktop) */}
          <div className="relative z-10 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-4 xl:gap-8">
            {examsData.map((exam, index) => (
              <div key={exam.id} className="relative flex items-center justify-center w-full lg:w-auto">
                
                {/* The Card */}
                <div 
                  className={`relative bg-[#1E2749] w-48 h-48 sm:w-52 sm:h-52 lg:w-40 lg:h-44 xl:w-48 xl:h-52 rounded-[1.5rem] border border-white/10 flex flex-col items-center justify-center transition-all hover:-translate-y-2 hover:scale-105 duration-300 ${exam.glowStyle}`}
                >
                  {/* Upcoming Badge */}
                  <span className="absolute -top-4 -right-2 sm:-right-4 bg-[#FFC582] text-[#141C3A] text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-[3px] border-[#141C3A] shadow-lg whitespace-nowrap z-10">
                    Upcoming
                  </span>

                  {/* Icon/Logo */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 mb-4 sm:mb-5">
                    <Image
                      src={exam.image}
                      alt={`${exam.title} Exam Logo`}
                      width={100}
                      height={100}
                      className="object-contain w-full h-full drop-shadow-md" 
                      sizes="(max-width: 768px) 64px, 80px"
                    />
                  </div>

                  {/* Title */}
                  <span className="text-white font-bold text-lg sm:text-xl xl:text-2xl tracking-wide">
                    {exam.title}
                  </span>
                </div>

                {/* Connecting Arrow between cards (Hidden on mobile & tablet) */}
                {index < examsData.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 xl:-right-8 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center bg-[#141C3A] border-2 border-white/10 rounded-full z-20 shadow-md">
                    <svg 
                      className="w-4 h-4 text-white/60" 
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
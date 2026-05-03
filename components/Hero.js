import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full bg-linear-to-r from-[#6f86e8] to-[#9db1fc] pt-12  sm:pt-16  md:pt-20  px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden rounded-b-[2rem]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
        
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-bold text-white leading-[1.1] mb-4 sm:mb-6 tracking-normal">
            Digroz Learning
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-105 leading-snug font-medium">
            Master NISM Exams with Smart Learning
          </p>
          <Link href="/get-started" passHref>
            <button className="bg-white text-gray-900 font-bold text-base sm:text-lg py-3.5 px-8 rounded-[1rem] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 relative mt-4 md:mt-0">
          <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[550px] aspect-[4/3]">
            {/* 
              Using the path derived from your local public folder. 
              Ensure 'bg-1.png' is the illustration without the blue background 
              (a transparent PNG) for the best result.
            */}
            <Image
              src="/assets/bg-1.png"
              alt="Student learning with financial charts"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#6f86e8] to-[#9db1fc] py-12 px-6 md:px-12 lg:px-24 overflow-hidden rounded-b-[2rem]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-4 tracking-normal">
            Digroz Learning
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-[420px] leading-snug font-medium">
            Master NISM Exams with Smart Learning
          </p>
          <Link href="/get-started" passHref>
            <button className="bg-white text-gray-900 font-bold text-lg py-3.5 px-8 rounded-[1rem] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 relative mt-8 md:mt-0">
          <div className="relative w-full max-w-[550px] aspect-[4/3]">
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
import Image from 'next/image';

export default function PlatformHighlight() {
  return (
    <section className="w-full bg-[#F8FAFF] py-16 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#141C3A] mb-10 md:mb-16 text-center tracking-tight">
          Platform Highlight
        </h2>

        {/* Illustration Container */}
        {/* 
          Using a responsive aspect ratio so the image scales proportionally 
          across mobile, tablet, and desktop screens without stretching.
        */}
        <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.35/1]">
          <Image
            src="/assets/bg-2.png"
            alt="Digroz Learning Platform Highlights and App Interface"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
          />
        </div>

      </div>
    </section>
  );
}
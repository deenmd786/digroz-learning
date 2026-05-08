import Image from 'next/image';

export default function ContactHero() {
  return (
   <section className="relative w-full bg-linear-to-r from-[#6f86e8] to-[#9db1fc] pt-12 sm:pt-4 px-4 sm:px-8 md:px-12 lg:px-24 rounded-b-[2rem]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
       
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Get in Touch with <br className="hidden lg:block" /> 
            Digroz Learning
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
            We are here to assist your Examination journey. Our team is ready to answer any questions you may have.
          </p>
        </div>

        {/* Right Column: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 relative mt-4 md:mt-0">
                  <div className="relative top-12 w-full max-w-[400px] md:max-w-[500px] lg:max-w-[550px] aspect-[4/3]">
                    {/* 
                      Using the path derived from your local public folder. 
                      Ensure 'bg-1.png' is the illustration without the blue background 
                      (a transparent PNG) for the best result.
                    */}
                    <Image
                      src="/assets/contact1.png"
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
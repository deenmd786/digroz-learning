export default function Loading() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-[#F8FAFF]">
      
      {/* Custom Animated Logo SVG */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_4px_12px_rgba(155,139,255,0.4)]">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Gradient Definition matches your logo */}
          <defs>
            <linearGradient id="digrozGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#81D6FF" />   {/* Light Cyan */}
              <stop offset="100%" stopColor="#A296F2" />  {/* Soft Purple */}
            </linearGradient>
          </defs>

          {/* Faded Background Track */}
          <path
            d="M 35 20 Q 25 20 25 30 L 25 70 Q 25 80 35 80 L 45 80 Q 85 80 85 50 Q 85 20 45 20 Z"
            stroke="#8295E5"
            strokeOpacity="0.15"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Animated Gradient Track */}
          <path
            d="M 35 20 Q 25 20 25 30 L 25 70 Q 25 80 35 80 L 45 80 Q 85 80 85 50 Q 85 20 45 20 Z"
            stroke="url(#digrozGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="220"
            strokeDashoffset="220"
          >
            {/* SVG Animation for the "drawing" effect */}
            <animate
              attributeName="stroke-dashoffset"
              values="220;0;220"
              dur="2.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </path>
        </svg>
      </div>

      {/* Loading Text */}
      <h2 className="mt-6 text-[#141C3A] text-sm md:text-base font-bold tracking-[0.2em] uppercase animate-pulse">
        Digroz
      </h2>
      
    </div>
  );
}
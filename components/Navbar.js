import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <header className="w-full bg-white px-6 py-5 md:px-12 lg:px-24 flex items-center justify-between rounded-t-4xl shadow-sm">
      
      {/* Logo Section */}
      <Link href="/" className="flex items-center">
        {/* 
          Using width and height for layout shifts, but applying Tailwind classes 
          (h-10 w-auto) to control the actual rendered size responsibly.
        */}
        <Image
          src="/assets/logo.png"
          alt="Digroz Learning Logo"
          width={220}
          height={70}
          className="object-contain h-10 w-auto md:h-16"
          priority
        />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
        <Link 
          href="/" 
          className="text-gray-900 text-lg font-medium hover:text-[#8295E5] transition-colors duration-200"
        >
          Home
        </Link>
        <Link 
          href="/courses" 
          className="text-gray-900 text-lg font-medium hover:text-[#8295E5] transition-colors duration-200"
        >
          Courses
        </Link>
        <Link 
          href="/contact" 
          className="text-gray-900 text-lg font-medium hover:text-[#8295E5] transition-colors duration-200"
        >
          Contact
        </Link>
        <Link 
          href="/privacy" 
          className="text-gray-900 text-lg font-medium hover:text-[#8295E5] transition-colors duration-200"
        >
          Privacy
        </Link>
      </nav>

      {/* Mobile Menu Icon (Visible only on small screens) */}
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 focus:outline-none hover:text-[#8295E5] transition-colors">
          <svg 
            className="w-7 h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16m-7 6h7" 
            />
          </svg>
        </button>
      </div>

    </header>
  );
}
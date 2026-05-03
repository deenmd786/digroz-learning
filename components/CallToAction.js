import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="w-full bg-[#F8FAFF] pb-20 px-6 flex justify-center items-center">
      <Link href="/get-started" passHref>
        <button 
          className="
            bg-gradient-to-r from-[#6F8AE8] to-[#C88BE6] 
            text-white font-bold text-lg md:text-xl 
            py-4 px-10 md:px-14 
            rounded-full 
            shadow-[0_8px_24px_-4px_rgba(150,135,235,0.4)] 
            hover:shadow-[0_12px_28px_-4px_rgba(150,135,235,0.55)] 
            hover:-translate-y-1 
            transition-all duration-300
          "
        >
          Start Learning Now
        </button>
      </Link>
    </section>
  );
}
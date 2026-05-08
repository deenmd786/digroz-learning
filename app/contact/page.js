import ContactFeatures from '@/components/ContactFeatures';
import ContactForm from '@/components/ContactForm';
import ContactHero from '@/components/ContactHero';
import React from 'react';


export default function Page() {
  return (
    <div className='bg-[#f4f6ff] pb-10'>
     
        <ContactHero />
        <ContactFeatures />
        <ContactForm />
     
    </div>
  );
}
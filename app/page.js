import React from 'react';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import PlatformHighlight from '@/components/PlatformHighlight';
import FutureExpansion from '@/components/FutureExpansion';
import CallToAction from '@/components/CallToAction';

export default function DigrozLearning() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Mobile Container wrapper */}
      <div className="mx-auto bg-white shadow-2xl overflow-hidden relative">
        
        <Hero />
        <Overview />
        <PlatformHighlight />
        <FutureExpansion />
        <CallToAction />
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function AccountDeletionPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState({ loading: false, message: "", type: "" });

  // Pre-defined options for a professional dropdown
  const deletionReasons = [
    "I have completed my exam preparation.",
    "I am switching to a different learning platform.",
    "I am taking a break from my studies.",
    "Privacy or data concerns.",
    "Other"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confirmed) {
      setStatus({ loading: false, message: "Please confirm that you understand this is permanent.", type: "error" });
      return;
    }

    setStatus({ loading: true, message: "", type: "" });

    try {
      const response = await fetch("/api/delete-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, reason }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, message: "Your deletion request has been submitted successfully.", type: "success" });
        setEmail("");
        setReason("");
        setConfirmed(false);
      } else {
        setStatus({ loading: false, message: data.error || "Something went wrong.", type: "error" });
      }
    } catch (error) {
      setStatus({ loading: false, message: "Failed to submit request. Please try again later.", type: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FF] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl w-full space-y-6">
        
        {/* Header Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1A2352]">Account and Data Deletion Request</h1>
          <p className="text-gray-600 mt-2">Last Updated: May 2024</p>
        </div>

        {/* Top Information Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-start space-x-4">
          <div className="flex-shrink-0">
            {/* Custom SVG icon representing the user shield */}
            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#A7B4E0" fillOpacity="0.5"/>
              <path d="M32 12C26.5 12 22 16.5 22 22C22 27.5 26.5 32 32 32C37.5 32 42 27.5 42 22C42 16.5 37.5 12 32 12Z" fill="#FCAE91"/>
              <path d="M14 52C14 42.1 22.1 34 32 34C41.9 34 50 42.1 50 52" stroke="#1A2352" strokeWidth="2" strokeLinecap="round"/>
              <path d="M46 36L60 36L53 50L46 36Z" fill="#A7B4E0" stroke="#1A2352" strokeWidth="2"/>
              <path d="M49 40L57 40M53 36L53 44" stroke="#1A2352" strokeWidth="2" strokeLinecap="round" transform="rotate(45 53 40)"/>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Request Account Deletion</h2>
            <p className="text-gray-700 mt-1">
              Use this form to request the complete removal of your Digroz Learning account and all associated personal information.
            </p>
          </div>
        </div>

        {/* Main Process and Form Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-start space-x-4 mb-8">
             <div className="flex-shrink-0">
               {/* Custom SVG for deletion process list */}
               <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="14" r="6" fill="#A7B4E0" stroke="#1A2352" strokeWidth="2"/>
                  <text x="16" y="18" fontSize="10" textAnchor="middle" fill="#1A2352" fontWeight="bold">1</text>
                  <circle cx="16" cy="32" r="6" fill="#A7B4E0" stroke="#1A2352" strokeWidth="2"/>
                  <text x="16" y="36" fontSize="10" textAnchor="middle" fill="#1A2352" fontWeight="bold">2</text>
                  <circle cx="16" cy="50" r="6" fill="#A7B4E0" stroke="#1A2352" strokeWidth="2"/>
                  <text x="16" y="54" fontSize="10" textAnchor="middle" fill="#1A2352" fontWeight="bold">3</text>
                  
                  <path d="M26 14 L40 14 L40 20" stroke="#1A2352" strokeWidth="1.5" fill="none"/>
                  <path d="M26 32 L36 32" stroke="#1A2352" strokeWidth="1.5" fill="none"/>
                  <path d="M26 50 L36 50" stroke="#1A2352" strokeWidth="1.5" fill="none"/>
                  
                  <path d="M38 36 L54 36 L50 56 L42 56 Z" fill="#A7B4E0" stroke="#1A2352" strokeWidth="2"/>
                  <path d="M44 40 L44 52 M48 40 L48 52" stroke="#1A2352" strokeWidth="1.5"/>
               </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Deletion Process</h2>
              <ol className="text-gray-700 mt-2 space-y-1">
                <li>1. Fill in your details below.</li>
                <li>2. Select the reason for deletion (optional).</li>
                <li>3. Verify your identity via the confirmation email you will receive.</li>
              </ol>
            </div>
          </div>

          {/* Conditional Rendering: Show Success Message OR the Form */}
          {status.type === 'success' ? (
            <div className="bg-[#EEF1FA] border border-[#A7B4E0] rounded-xl p-8 text-center space-y-4">
              <svg className="w-16 h-16 mx-auto text-[#8C87D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900">Request Received</h3>
              <p className="text-gray-700">{status.message}</p>
              <p className="text-sm text-gray-600 mt-4">
                Please check your inbox. We have sent an email to verify your identity before processing the deletion.
              </p>
            </div>
          ) : (
            <div className="bg-[#EEF1FA] rounded-xl p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div>
                  <label htmlFor="email" className="block text-gray-800 font-medium mb-1">
                    Your Registered Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., student@example.com"
                    className="w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9D99DF] focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Updated: Professional Dropdown Select */}
                <div>
                  <label htmlFor="reason" className="block text-gray-800 font-medium mb-1">
                    Reason for Deletion (Optional)
                  </label>
                  <div className="relative">
                    <select
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9D99DF] focus:border-transparent outline-none appearance-none cursor-pointer transition-all"
                    >
                      <option value="" disabled>Select a reason...</option>
                      {deletionReasons.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {/* Custom Dropdown Arrow for better UI */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-gray-800 font-medium mb-3">Confirm Action</label>
                  <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="confirm"
                        required
                        checked={confirmed}
                        onChange={(e) => setConfirmed(e.target.checked)}
                        className="w-5 h-5 text-[#9D99DF] border-gray-300 rounded focus:ring-[#9D99DF] cursor-pointer"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="confirm" className="font-medium text-gray-700 cursor-pointer">
                        I understand this action is permanent.
                      </label>
                      <p className="text-gray-500">This will delete your progress, mock test results, and all associated data.</p>
                    </div>
                  </div>
                </div>

                {status.type === 'error' && (
                  <div className="p-4 rounded-lg text-sm bg-red-50 border border-red-200 text-red-700 flex items-center">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.loading || !confirmed}
                  className="w-full mt-2 bg-gradient-to-r from-[#8C87D9] to-[#A99CD9] hover:from-[#7b76c9] hover:to-[#9687c9] text-white font-semibold py-3.5 px-4 rounded-xl transition duration-200 disabled:opacity-50 shadow-sm"
                >
                  {status.loading ? "Submitting Request..." : "Permanently Delete Account"}
                </button>

              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
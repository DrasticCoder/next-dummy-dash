"use client"

import { useState } from 'react';
import Link from 'next/link';

const SendPage = () => {
  const [phoneNumbers, setPhoneNumbers] = useState('');
  const [message, setMessage] = useState('');

const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const csvContent = event.target?.result as string;
            setPhoneNumbers(csvContent);
        };
        reader.readAsText(file);
    }
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle your submission logic here
    // Redirect to analysis page after submission
    window.location.href = '/analysis'; 
};

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Send Message</h2>
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        placeholder="Enter phone numbers or upload CSV"
        className="mt-4 p-2 border border-gray-300 rounded"
        value={phoneNumbers}
        onChange={(e) => setPhoneNumbers(e.target.value)}
      />
      <input
        type="file"
        accept=".csv"
        className="mt-4 p-2 border border-gray-300 rounded"
        onChange={handleFileUpload}
      />
      <textarea
        placeholder="Enter your message"
        className="mt-4 p-2 border border-gray-300 rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </form>
    </div>
  );
};

export default SendPage;

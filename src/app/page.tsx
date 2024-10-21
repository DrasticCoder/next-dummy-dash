"use client"
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Our Service</h1>
      <Link href="/qr" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go to QR Page
      </Link>
    </div>
  );
};

export default HomePage;

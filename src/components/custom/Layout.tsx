"use client"
import { useState } from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
            </li>
            <li>
              <Link href="/qr" className="block px-4 py-2 hover:bg-gray-700">QR Page</Link>
            </li>
            <li>
              <Link href="/send" className="block px-4 py-2 hover:bg-gray-700">Send Messages</Link>
            </li>
            <li>
              <Link href="/template" className="block px-4 py-2 hover:bg-gray-700">Templates</Link>
            </li>
            <li>
              <Link href="/analysis" className="block px-4 py-2 hover:bg-gray-700">Analysis</Link>
            </li>
            <li>
              <Link href="/csv" className="block px-4 py-2 hover:bg-gray-700">CSV Files</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex items-center justify-between h-16 px-4 bg-white shadow">
          <button onClick={toggleSidebar} className="text-gray-800 md:hidden">
            ☰
          </button>
          <h2 className="text-xl font-semibold">Welcome to Your Dashboard</h2>
          <div>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded hover:bg-gray-300">Logout</button>
          </div>
        </header>

        {/* Children */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

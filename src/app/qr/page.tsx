"use client"
import { QRCodeCanvas } from 'qrcode.react';
import Link from 'next/link';

const QRPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Your QR Code</h2>
      <QRCodeCanvas value="Your data here" size={256} />
      <Link href="/send" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go to Send Page
      </Link>
    </div>
  );
};

export default QRPage;

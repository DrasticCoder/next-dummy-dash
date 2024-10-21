import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"  
import Link from 'next/link';

const TemplatePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [templateText, setTemplateText] = useState('');

  const templates = [
    "Hello {{User_name}}, good morning from {{company_name}}. We are happy to announce our new product.",
    // Add more templates as needed
  ];

  const openDialog = (text: string) => {
    setTemplateText(text);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Templates</h2>
      <div className="flex flex-wrap justify-center mt-4">
        {templates.map((template, index) => (
          <div key={index} className="m-4 p-4 border rounded bg-gray-200 cursor-pointer" onClick={() => openDialog(template)}>
            {template.slice(0, 30)}...
          </div>
        ))}
      </div>
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="hidden" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
        <DialogTitle>Template Preview</DialogTitle>
        <DialogDescription>{templateText}</DialogDescription>
        </DialogHeader>
        <button onClick={() => setIsOpen(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Close
        </button>
      </DialogContent>
    </Dialog>
    </div>
  );
};

export default TemplatePage;

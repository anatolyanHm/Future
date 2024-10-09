import React from 'react';
import { Deal } from '@/app/types/deal';

interface DealCardProps {
  deal: Deal;
  onEnroll: (dealId: string) => void;
}

const DealCard: React.FC<DealCardProps> = ({ deal, onEnroll }) => {
  return (
    <div className="border rounded p-4 mb-4 bg-white shadow-md w-full max-w-md">
      <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
      <p className="text-gray-700 mb-2">Description: {deal.description}</p>
      <p className="text-gray-600 mb-2">Status: {deal.status}</p>
      <p className="text-gray-600 mb-2">Date: {deal.date}</p>
      <button
        onClick={() => onEnroll(deal.id)}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Enroll
      </button>
    </div>
  );
};

export default DealCard;

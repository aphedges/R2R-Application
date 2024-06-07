import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const setColor = (keyword: string): string => {
  switch (keyword) {
    case 'success':
      return 'bg-emerald-400';
    case 'failure':
      return 'bg-red-400';
    case 'Search':
      return 'bg-sky-500';
    case 'Embedding':
      return 'bg-orange-600';
    case 'RAG':
      return 'bg-indigo-400';
    case 'WARNING':
      return 'bg-amber-400';
    default:
      return 'bg-gray-400';
  }
};

export const setTextColor = (keyword: string): string => {
  switch (keyword) {
    case 'WARNING':
      return 'text-amber-800';
    default:
      return 'text-gray-800';
  }
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
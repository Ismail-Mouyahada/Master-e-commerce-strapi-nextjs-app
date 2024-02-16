import { ReactNode } from 'react';

interface DiffculteIndicatorProps {
  difficulty: number;
}
 
export function DiffculteIndicator({ difficulty }: DiffculteIndicatorProps) {
  const progressBarWidth = `${ difficulty * 2}%`;
  return (
    <>
      <span className="block text-gray-500 text-sm">
      
      <div className="w-full bg-gray-200 rounded-4/3 h-2.5 dark:bg-gray-700">
        <div className="bg-red-400 h-2.5 rounded-full" style={{ width: progressBarWidth }}></div>
      </div>
      

       <div className='w-full flex justify-between'>  <span> Difficulté</span> <span className="text-right">{difficulty}%</span> </div>
    </span>
    </>
  );
}

 
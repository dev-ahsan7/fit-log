'use client';
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkouts } from '@/Types/workout.type';
import { Bookmark, XCircle } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SavePlanButton = ({ workout }: { workout: IWorkouts }) => {
  const { savePlan, setSavePlan } = useContext(WorkoutContext) as {
    savePlan: IWorkouts[];
    setSavePlan: React.Dispatch<React.SetStateAction<IWorkouts[]>>;
  };

  const alreadyAdded = savePlan.some((w) => w.id === workout.id);

  const handdleSaveButton = () => {
    if (alreadyAdded) {
      toast.error('Already in your saved list', {
        style: {
          background: '#1A1D24',
          color: '#fff',
          border: '1px solid #2A2F3A',
        },
        icon: <XCircle className="h-5 w-5 text-red-500" />,
      });
      return;
    }

    setSavePlan([...savePlan, workout]);
    toast.success(`${workout.name} saved for later`);
  };

  return (
    <button
      onClick={handdleSaveButton}
      className={`flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition cursor-pointer ${
        alreadyAdded
          ? 'border-red-900 bg-[#2A1618] text-red-400'
          : 'border-[#374151] text-white hover:bg-neutral-900'
      }`}
    >
      {alreadyAdded ? (
        <XCircle className="h-4 w-4" />
      ) : (
        <Bookmark className="h-4 w-4" />
      )}
      {alreadyAdded ? 'Already saved' : 'Save for later'}
    </button>
  );
};

export default SavePlanButton;

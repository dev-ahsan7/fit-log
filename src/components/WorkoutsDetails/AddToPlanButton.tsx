'use client';
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkouts } from '@/Types/workout.type';
import { Calendar, XCircle } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const AddToPlanButton = ({ workout }: { workout: IWorkouts }) => {
  const { addPlan, setAddPlan } = useContext(WorkoutContext) as {
    addPlan: IWorkouts[];
    setAddPlan: React.Dispatch<React.SetStateAction<IWorkouts[]>>;
  };

  const alreadyAdded = addPlan.some((w) => w.id === workout.id);

  const handdleAddToPlan = () => {
    if (alreadyAdded) {
      toast.error('Already in your plan');
      return;
    }

    setAddPlan([...addPlan, workout]);
    toast.success(`${workout.name} Added to today's plan`);
  };

  return (
    <button
      onClick={handdleAddToPlan}
      className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition cursor-pointer ${
        alreadyAdded
          ? 'bg-[#2A1618] text-red-400'
          : 'bg-[#CCFF00] text-black hover:bg-[#c0f003]'
      }`}
    >
      {alreadyAdded ? (
        <XCircle className="h-4 w-4" />
      ) : (
        <Calendar className="h-4 w-4" />
      )}
      {alreadyAdded ? 'Already in your plan' : "Add to today's plan"}
    </button>
  );
};

export default AddToPlanButton;

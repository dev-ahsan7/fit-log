import { IWorkouts } from '@/Types/workout.type';
import React from 'react';
import { oswald } from '../lib/fonts';

interface MetricsProps {
  addPlan: IWorkouts[];
}

const Metrics = ({ addPlan }: MetricsProps) => {
  const totalExercises = addPlan.length;
  const totalMinutes = addPlan.reduce(
    (sum, w) => sum + (Number(w.duration) || 0),
    0,
  );
  const totalCalories = addPlan.reduce(
    (sum, w) => sum + (Number(w.caloriesBurned) || 0),
    0,
  );
  return (
    <div className="mt-6 grid grid-cols-3 divide-x divide-[#232834] rounded-2xl border border-[#232834] bg-[#0d0f14] p-6">
      <div className="px-4 first:pl-0">
        <p className="text-sm text-[#8A92A0]">Exercises</p>
        <p
          className={`${oswald.className} mt-1.5 text-4xl font-bold text-[#CCFF00]`}
        >
          {totalExercises}
        </p>
      </div>
      <div className="px-4">
        <p className="text-sm text-[#8A92A0]">Minutes</p>
        <p
          className={`${oswald.className} mt-1.5 text-4xl font-bold text-white`}
        >
          {totalMinutes}
        </p>
      </div>
      <div className="px-4">
        <p className="text-sm text-[#8A92A0]">Calories</p>
        <p
          className={`${oswald.className} mt-1.5 text-4xl font-bold text-white`}
        >
          {totalCalories}
        </p>
      </div>
    </div>
  );
};

export default Metrics;

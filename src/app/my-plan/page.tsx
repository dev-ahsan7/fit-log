'use client';
import ListedWorkout from '@/components/shared/ListedWorkout';
import NothingHereYet from '@/components/WorkoutsDetails/NothingHereYet';

import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkouts } from '@/Types/workout.type';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {
  const { addPlan, savePlan } = useContext(WorkoutContext) as {
    addPlan: IWorkouts[];
    savePlan: IWorkouts[];
  };

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

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
    <section className="max-w-7xl mx-auto px-6 pt-6.5 pb-6 sm:pt-12 sm:pb-12">
      <h1 className="text-2xl font-extrabold uppercase tracking-tight text-white">
        My Plan
      </h1>
      <p className="mt-1 text-sm text-neutral-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics Summary*/}
      <div className="mt-6 grid grid-cols-3 divide-x divide-[#232834] rounded-2xl border border-[#232834] bg-[#0d0f14] p-6">
        <div className="px-4 first:pl-0">
          <p className="text-xs text-neutral-500">Exercises</p>
          <p className="mt-1.5 text-2xl font-bold text-[#CCFF00]">
            {totalExercises}
          </p>
        </div>
        <div className="px-4">
          <p className="text-xs text-neutral-500">Minutes</p>
          <p className="mt-1.5 text-2xl font-bold text-white">{totalMinutes}</p>
        </div>
        <div className="px-4">
          <p className="text-xs text-neutral-500">Calories</p>
          <p className="mt-1.5 text-2xl font-bold text-white">
            {totalCalories}
          </p>
        </div>
      </div>

      {/* Tab */}
      <div className="mt-8 inline-flex items-center gap-1 rounded-2xl border border-[#232834] bg-[#0d0f14] p-1.5">
        <button
          type="button"
          onClick={() => setActiveTab('today')}
          className={`rounded-xl px-5 py-2 text-sm font-semibold transition cursor-pointer ${
            activeTab === 'today'
              ? 'bg-[#1c2029] text-white'
              : 'text-neutral-500'
          }`}
        >
          Today&apos;s Plan
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('saved')}
          className={`rounded-xl px-5 py-2 text-sm font-semibold transition cursor-pointer ${
            activeTab === 'saved'
              ? 'bg-[#1c2029] text-white'
              : 'text-neutral-500'
          }`}
        >
          Saved
        </button>
      </div>

      {activeTab === 'today' && (
        <div className="py-6">
          {addPlan.length ? (
            addPlan.map((workout: IWorkouts) => (
              <ListedWorkout key={workout.id} workout={workout}></ListedWorkout>
            ))
          ) : (
            <NothingHereYet />
          )}
        </div>
      )}

      {activeTab === 'saved' && (
        <div className="py-6">
          {savePlan.length ? (
            savePlan.map((workout: IWorkouts) => (
              <ListedWorkout key={workout.id} workout={workout}></ListedWorkout>
            ))
          ) : (
            <NothingHereYet />
          )}
        </div>
      )}
    </section>
  );
};

export default MyPlanPage;

'use client';
import ListedWorkout from '@/components/WorkoutPlan/ListedWorkout';
import Metrics from '@/components/WorkoutPlan/Metrics';
import PlanHeader from '@/components/WorkoutPlan/PlanHeader';
import SortDropdown, {
  SortOption,
} from '@/components/WorkoutPlan/SortDropdown';
import NothingHereYet from '@/components/WorkoutsDetails/NothingHereYet';

import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkouts } from '@/Types/workout.type';
import React, { useContext, useMemo, useState } from 'react';

const sortWorkouts = (list: IWorkouts[], sortBy: SortOption): IWorkouts[] => {
  const sorted = [...list];
  switch (sortBy) {
    case 'duration':
      return sorted.sort((a, b) => Number(a.duration) - Number(b.duration));
    case 'calories':
      return sorted.sort(
        (a, b) => Number(a.caloriesBurned) - Number(b.caloriesBurned),
      );
    case 'rating':
      return sorted.sort((a, b) => Number(b.rating) - Number(a.rating));
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
};

const MyPlanPage = () => {
  const { addPlan, savePlan } = useContext(WorkoutContext) as {
    addPlan: IWorkouts[];
    savePlan: IWorkouts[];
  };

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  const [sortBy, setSortBy] = useState<SortOption>('duration');

  const sortedAddPlan = useMemo(
    () => sortWorkouts(addPlan, sortBy),
    [addPlan, sortBy],
  );
  const sortedSavePlan = useMemo(
    () => sortWorkouts(savePlan, sortBy),
    [savePlan, sortBy],
  );

  return (
    <section className="max-w-7xl mx-auto px-6 pt-6.5 pb-6 sm:pt-12 sm:pb-12">
      <PlanHeader></PlanHeader>

      {/* Metrics Summary*/}
      <Metrics addPlan={addPlan}></Metrics>

      {/* Tab + Sort */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-1 rounded-2xl border border-[#232834] bg-[#0d0f14] p-1.5">
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

        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      {activeTab === 'today' && (
        <div className="py-6 space-y-4">
          {sortedAddPlan.length ? (
            sortedAddPlan.map((workout: IWorkouts) => (
              <ListedWorkout key={workout.id} workout={workout}></ListedWorkout>
            ))
          ) : (
            <NothingHereYet />
          )}
        </div>
      )}

      {activeTab === 'saved' && (
        <div className="py-6">
          {sortedSavePlan.length ? (
            sortedSavePlan.map((workout: IWorkouts) => (
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

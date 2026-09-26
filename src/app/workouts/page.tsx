import WorkoutCard from '@/components/Homepage/WorkoutCard';
import { IWorkouts } from '@/Types/workout.type';
import React from 'react';
import { oswald } from '../layout';

const getWorkouts = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Workouts');
  }

  const data = await res.json();
  return data;
};

const WorkoutPage = async () => {
  const workoutsData = await getWorkouts();

  if (!workoutsData?.length) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm text-neutral-500">No workouts logged yet.</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-6.5 pb-6 sm:pt-12 sm:pb-12">
      <div className="flex flex-col gap-8">
        {/* Top Text */}
        <div className="flex flex-col gap-1">
          <h2
            className={`${oswald.className} font-bold text-[30px] tracking-tight`}
          >
            THE LIBRARY
          </h2>
          <p className="text-sm text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {workoutsData.map((workout: IWorkouts) => (
            <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPage;

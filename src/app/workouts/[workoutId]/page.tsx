import { IWorkouts } from '@/Types/workout.type';
import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation';
import AddToPlanButton from '@/components/WorkoutsDetails/AddToPlanButton';
import SavePlanButton from '@/components/WorkoutsDetails/SavePlanButton';
import { oswald } from '@/components/lib/fonts';

interface WorkoutDetialsPageProps {
  params: Promise<{ workoutId: number }>;
}

const getWorkouts = async (): Promise<IWorkouts[]> => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Workouts');
  }

  const data = await res.json();
  return data;
};

const WorkoutDetialsPage = async ({ params }: WorkoutDetialsPageProps) => {
  const { workoutId } = await params;
  const workoutsData = await getWorkouts();
  const workout = workoutsData.find((w) => Number(w.id) === Number(workoutId));

  if (!workout) {
    notFound();
  }

  const stats = [
    { label: 'Equipment', value: workout.equipment },
    { label: 'Difficulty', value: workout.difficulty },
    { label: 'Sets', value: workout.sets },
    { label: 'Reps', value: workout.reps },
    { label: 'Duration', value: `${workout.duration} min` },
    { label: 'Calories', value: `${workout.caloriesBurned} kcal` },
    { label: 'Rating', value: workout.rating },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl md:aspect-4/5">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1
            className={`${oswald.className} text-3xl font-bold uppercase tracking-tight text-white md:text-4xl`}
          >
            {workout.name}
          </h1>
          <p className="mt-3 text-base text-[#9CA3AF]">{workout.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-semibold text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center justify-between px-5 py-3.5 ${
                  i !== stats.length - 1 ? 'border-b border-[#232834]' : ''
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                  {stat.label}
                </span>
                <span className="text-sm font-medium text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-base font-extrabold uppercase tracking-wider text-white">
              Instructions
            </h2>
            <ol className="mt-4 space-y-3">
              {workout.instructions?.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-neutral-300">
                  <span className="text-[#D1D5DB]">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <AddToPlanButton workout={workout}></AddToPlanButton>
            <SavePlanButton workout={workout}></SavePlanButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetialsPage;

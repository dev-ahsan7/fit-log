import { IWorkouts } from '@/Types/workout.type';
import { Clock, Flame, Star, Check, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ListedWorkout = ({ workout }: { workout: IWorkouts }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#232834] bg-[#0d0f14] p-4">
      <div className="relative h-20 w-36 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
          {workout.name}
        </h3>
        <p className="mt-0.5 text-xs text-neutral-500">{workout.equipment}</p>

        <div className="mt-1.5 flex items-center gap-4 text-xs text-neutral-400">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-[#CCFF00]" />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button className="rounded-lg border border-[#374151] px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-900 cursor-pointer">
          View Details
        </button>
        <button className="flex items-center gap-1.5 rounded-lg bg-[#CCFF00] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#c0f003] cursor-pointer">
          <Check className="h-3.5 w-3.5" />
          Mark as Done
        </button>
        <button className="text-neutral-500 transition hover:text-white cursor-pointer">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ListedWorkout;

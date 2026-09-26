import { oswald } from '@/app/layout';
import { IWorkouts } from '@/Types/workout.type';
import { Clock, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const WorkoutCard = ({ workout }: { workout: IWorkouts }) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link
      href={`/workouts/${id}`}
      className="block rounded-xl bg-[#15171C] border border-[#222630] hover:border-[#c2f800ab] overflow-hidden transition-colors "
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[11px] tracking-wide font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3
          className={`${oswald.className} text-lg font-bold uppercase text-white`}
        >
          {name}
        </h3>
        <p className="mt-1 text-sm text-[#9CA3AF]">{equipment}</p>

        <div className="my-3 border-t border-[#292D35]" />

        <div className="flex items-center gap-4 text-xs text-[#9CA3AF]">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" />
            {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-[#F5A623] text-[#F5A623]" />
            {rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;

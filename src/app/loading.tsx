import { Dumbbell } from 'lucide-react';

const Loading = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#232834]" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#CCFF00] border-r-[#CCFF00]" />
          <div
            className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-[#CCFF00]/40"
            style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}
          />
          <Dumbbell className="h-7 w-7 animate-pulse text-[#CCFF00]" />
        </div>
        <p className="text-sm font-medium tracking-wide text-neutral-500">
          Loading your workouts
          <span className="animate-pulse">...</span>
        </p>
      </div>
    </section>
  );
};

export default Loading;

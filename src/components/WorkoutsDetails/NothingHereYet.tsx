import Link from 'next/link';
import React from 'react';

interface NothingHereYetProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}

const NothingHereYet = ({
  title = 'NOTHING HERE YET',
  description = 'Browse the library and add a lift to get today moving.',
  buttonText = 'Go to workouts',
  href = '/workouts',
}: NothingHereYetProps) => {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-[#232834] px-6 text-center">
      <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
        {title}
      </h3>
      <p className="mt-2 max-w-sm text-sm text-neutral-500">{description}</p>
      <Link
        href={href}
        className="mt-6 rounded-xl bg-[#CCFF00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#c0f003]"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default NothingHereYet;

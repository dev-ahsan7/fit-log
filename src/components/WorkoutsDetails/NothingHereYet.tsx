import Link from 'next/link';
import React from 'react';
import { oswald } from '../lib/fonts';

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
    <div className="flex min-h-80 flex-col items-center bg-[#111317] justify-center rounded-2xl border border-dashed border-[#232834] px-6 text-center">
      <h3
        className={`${oswald.className} text-[20px] font-bold uppercase tracking-wide text-white`}
      >
        {title}
      </h3>
      <p className="mt-2 text-base max-w-sm text-[#A1A1AA]">{description}</p>
      <Link
        href={href}
        className="mt-6 rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#c0f003]"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default NothingHereYet;

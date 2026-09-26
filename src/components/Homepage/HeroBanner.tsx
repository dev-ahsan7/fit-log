import Image from 'next/image';
import Link from 'next/link';
import heroImage from '@/assets/banner.png';
import { oswald } from '../lib/fonts';

const HeroBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-6.5 pb-6 sm:pt-12 sm:pb-12">
      <div className="rounded-2xl bg-[#15171D] px-6 py-12 sm:px-6 sm:py-10 border border-[#222630] lg:px-14 lg:py-14">
        <div className="flex flex-col lg:flex-row items-center  justify-between gap-10">
          {/* Texts Content */}
          <div className="max-w-xl  text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-wide text-[#C2F800] mb-5">
              Workout Library
            </p>
            <h1
              className={`${oswald.className} font-bold uppercase text-white text-4xl sm:text-5xl lg:text-[60px]  mb-5`}
            >
              Train With Intent. Log Every Set.
            </h1>
            <p className="text-[#9CA3AF] lg:max-w-120.25 text-base leading-6 mb-5">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <Link
              href="/workouts"
              className="inline-block rounded-md bg-[#C2F800] px-6 py-3 text-sm font-bold uppercase text-black transition-opacity hover:opacity-90"
            >
              Browse Workouts
            </Link>
          </div>

          {/* Image */}
          <div className="w-full max-w-75 sm:max-w-90 lg:max-w-100">
            <Image
              src={heroImage}
              alt="Anatomical figure training on a gym machine"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

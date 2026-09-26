import { oswald } from '@/components/lib/fonts';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold text-[#CCFF00]">404</p>
      <h1
        className={`${oswald.className} mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl`}
      >
        Page Not Found
      </h1>
      <p className="mt-3 max-w-sm text-sm text-neutral-500">
        The workout or page you&apos;re looking for doesn&apos;t exist or may
        have been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-[#CCFF00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#c0f003]"
      >
        Back to Home
      </Link>
    </section>
  );
}

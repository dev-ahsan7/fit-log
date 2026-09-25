'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-full px-5 py-2.5 transition-colors ${
        isActive
          ? 'bg-[#c2f80017] text-[#C2F800] '
          : 'text-[#9CA3AF] font-normal hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

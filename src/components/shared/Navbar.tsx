import Link from 'next/link';
import { Menu } from 'lucide-react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { oswald } from '@/app/layout';
import NavLink from './Navlink';

const NAV_LINKS = [
  { href: '/workouts', label: 'Workouts' },
  { href: '/my-plan', label: 'My Plan' },
];

const Navbar = () => {
  const links = (
    <>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <NavLink href={link.href}>{link.label}</NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="border-b border-[#1C1F26]">
      <div className="navbar max-w-7xl mx-auto px-6 py-6.5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu className="" aria-label="Menu" />
            </div>
            <ul
              tabIndex={-1}
              className="menu font-normal text-sm text-[#9CA3AF] menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={'/'}>
            <div className="flex items-center gap-2.5">
              <Image src={logo} alt="" width={28} height={28} />
              <h4 className={`${oswald.className} font-bold text-[18px] `}>
                FITLOG
              </h4>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-normal text-sm menu-horizontal px-1 gap-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-6">
            {/* Plan */}
            <Link href="/my-plan" className="flex items-center gap-2">
              <span className="text-sm font-normal text-[#9CA3AF]">Plan</span>

              <span className="flex items-center justify-center px-2 py-0.5 rounded-full bg-[#C2F800] text-sm font-normal text-black">
                0
              </span>
            </Link>

            {/* Saved */}
            <Link href="/my-plan" className="flex items-center gap-2">
              <span className="text-sm font-normal text-[#9CA3AF]">Saved</span>

              <span className="flex items-center justify-center px-2 py-0.5 rounded-full border border-[#323742] text-sm text-[#9CA3AF]">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

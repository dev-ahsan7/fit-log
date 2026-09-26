import Image from 'next/image';
import logo from '@/assets/logo.png';
import { oswald } from '../lib/fonts';

const Footer = () => {
  return (
    <footer className="bg-[#090A0D] border-t border-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-6 py-6.5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image src={logo} alt="" width={28} height={28} />
          <h4 className={`${oswald.className} font-bold text-[18px]`}>
            FITLOG
          </h4>
        </div>

        <p className="text-sm text-[#6B7280] text-center sm:text-right">
          &copy; {new Date().getFullYear()} FitLog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

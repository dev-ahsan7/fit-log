import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import WorkoutProvider from '@/context/WorkoutContext';
import { ToastContainer, Zoom } from 'react-toastify';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
// export const oswald = Oswald({ subsets: ['latin'], weight: ['700'] });

export const metadata: Metadata = {
  title: 'Fit Log',
  description: 'Workout Library & Fitness Tracking',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <WorkoutProvider>
          <Navbar></Navbar>
          <div>{children}</div>
          <Footer></Footer>
          <ToastContainer transition={Zoom} autoClose={2000} theme="dark" />
        </WorkoutProvider>
      </body>
    </html>
  );
}

import React from 'react';
import { oswald } from '../lib/fonts';

const PlanHeader = () => {
  return (
    <div>
      <h1
        className={`${oswald.className} text-[30px] font-bold uppercase tracking-tight text-white`}
      >
        My Plan
      </h1>
      <p className="mt-1 text-sm text-[#8A92A0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>
    </div>
  );
};

export default PlanHeader;

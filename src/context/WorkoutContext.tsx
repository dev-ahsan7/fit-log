'use client';

import { IWorkouts } from '@/Types/workout.type';
import React, { createContext, ReactNode, useState } from 'react';

interface IWorkoutContext {
  addPlan: IWorkouts[];
  setAddPlan: React.Dispatch<React.SetStateAction<IWorkouts[]>>;
  savePlan: IWorkouts[];
  setSavePlan: React.Dispatch<React.SetStateAction<IWorkouts[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
  addPlan: [],
  setAddPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<IWorkouts[]>([]);
  const [savePlan, setSavePlan] = useState<IWorkouts[]>([]);

  const sharedData = {
    addPlan,
    setAddPlan,
    savePlan,
    setSavePlan,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;

# FitLog

A workout library and fitness tracking web app where users can browse exercises, build a daily workout plan, save lifts for later, and track their progress — all with a fast, responsive, dark-themed interface.

## Description

FitLog lets users explore a library of workouts (with equipment, difficulty, sets/reps, duration, calories, and instructions), add selected workouts to today's plan, save others for later, mark workouts as done, and view a live summary of their daily exercises, minutes, and calories — all backed by a global state that persists across the app without a database on the client side.

## Technologies Used

- **Next.js (App Router)** — routing, Server Components, and data fetching
- **TypeScript** — type-safe components and data models
- **Tailwind CSS** — utility-first styling and responsive layout
- **React Context API** — global state for the workout plan and saved list
- **react-toastify** — toast notifications for user actions
- **lucide-react** — icon set used throughout the UI
- **next/font (Google Fonts)** — Inter and Oswald for typography

## Key Features

1. **Workout Library** — Browse a responsive grid of workouts fetched from a live API, each with a details page showing equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.
2. **Today's Plan & Saved Tabs** — Add workouts to a daily plan or save them for later, with a pill-style tab switcher to move between the two lists.
3. **Live Metrics Summary** — A stats card automatically calculates total exercises, minutes, and calories burned based on what's currently in the plan.
4. **Mark as Done / Remove** — Complete a workout to log it and clear it from the plan, or remove it entirely — each action triggers a contextual toast notification.
5. **Sort & Empty States** — Sort the plan by duration, calories, rating, or name, with a dedicated "Nothing Here Yet" state guiding users back to the library when a list is empty.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

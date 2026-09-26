# FitLog

A workout library and fitness tracking app — browse exercises, build a daily plan, save lifts for later, and track progress in a fast, dark-themed interface.

🔗 **Live Demo:** [fit-log-liard.vercel.app](https://fit-log-liard.vercel.app/)

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React_Context-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Description

FitLog lets users explore a library of workouts — each with equipment, difficulty, sets/reps, duration, calories, and step-by-step instructions — and turn that library into an actionable daily routine. Workouts can be added to today's plan or saved for later, marked as done once completed, and sorted by duration, calories, rating, or name. A live metrics summary keeps track of total exercises, minutes, and calories at a glance, with toast notifications confirming every action along the way.

## Features

- 🏋️ **Workout Library** — a responsive grid of workouts pulled from a live API, each with its own details page covering equipment, sets, reps, duration, calories, rating, and instructions
- 📋 **My Plan & Saved Tabs** — add workouts to today's plan or save them for later, switching between the two with a clean pill-style tab bar
- 📊 **Live Metrics Summary** — total exercises, minutes, and calories update automatically based on what's currently in the plan
- ✅ **Mark as Done / Remove** — complete a workout to log it and clear it from the plan, or remove it entirely, with a contextual toast for every action
- 🔀 **Sort & Empty States** — sort the plan by duration, calories, rating, or name, with a dedicated empty state guiding users back to the library
- ⚡ **Polished UX** — custom 404 page, global loading state, and responsive layouts across mobile and desktop

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app locally, or visit the [live demo](https://fit-log-liard.vercel.app/).
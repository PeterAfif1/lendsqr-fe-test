# Lendsqr Frontend Engineering Assessment

A frontend implementation of the Lendsqr admin dashboard built with React, TypeScript, and SCSS.

**Live Demo:** https://peter-afif-lendsqr-fe-test.vercel.app

## Pages

- **Login** — Email/password form with validation
- **Dashboard** — Overview with stat cards
- **Users** — Table of 500 mock users with filtering, pagination, and status actions
- **User Details** — Full profile view with personal, education, social, and guarantor info

## Tech Stack

- React 18 + TypeScript
- Vite
- SCSS (BEM methodology)
- React Router v6
- Vitest + React Testing Library
- localStorage for user detail persistence

## Getting Started

```bash
npm install
npm run dev
```

## Running Tests

```bash
npm run test
```

## Notes

- 500 users generated from a mock API, cached in memory on first call
- Clicking a user saves their data to localStorage so the detail page works on refresh
- Filters, pagination, and blacklist/activate actions all work
- Fully responsive

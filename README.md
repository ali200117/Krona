# Krona

Krona is a personal finance and budgeting app currently being planned and structured from the ground up. The project is not focused on building every feature at once. The goal right now is to create a strong and clean foundation that makes the app easy to develop, maintain, and expand later.

## Current project idea

Krona is meant to help users get a simple and clear overview of their monthly finances in one main dashboard. The app is designed to show how money comes in, where it goes, how much is being saved, and how much is left over for the current period.

The first version of the app is intentionally small and focused. Instead of trying to build a complete finance platform immediately, the project starts with a dashboard-first approach.

## Planned first version

The first version of Krona is planned to include:

- income section
- expense section
- savings section
- savings goals section
- leftover money summary

The dashboard should allow the user to:

- add multiple income sources such as salary, NAV, freelance work, or other payments
- add expenses such as rent, food, transport, or subscriptions
- add savings categories or savings accounts such as vacation, emergency fund, or investments
- define savings goals for the current period
- see how much money remains after expenses and savings have been accounted for

## Design direction

The app is planned as a mobile-first experience. The first goal is to make it work well as a PWA so it can be tested on iPhone without needing native iOS development yet.

The visual structure currently planned is:

- a top bar with a menu icon on the left
- the Krona name centered at the top
- a profile icon on the right
- a simple dashboard layout with separate sections for income, expenses, savings, and goals
- a bottom navigation bar with a home button and placeholders for future sections

The design philosophy is to keep the app clean, modern, simple, and practical.

## Technical direction

The project is currently being prepared with a separated frontend and backend structure.

### Frontend
The planned frontend stack is:

- React
- TypeScript
- Vite
- PWA support

### Backend
The planned backend stack is:

- ASP.NET Core Web API
- C#
- Entity Framework Core

### Database
The current plan is:

- start simple
- add proper database integration after the base structure is stable
- likely use SQL Server locally first
- possibly move to Azure SQL later

## Architecture goal

The main goal right now is not feature completion, but good structure.

The project should be:

- modular
- easy to understand
- easy to change later
- safe to expand
- suitable for gradual development

The app should avoid mixing everything into one place. Frontend, backend, logic, and data access should be clearly separated so that future development becomes easier.

## Planned folder structure

A likely project structure is:

```text
Krona/
  frontend/
  backend/
  README.md
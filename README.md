# 🔮 Peter Answers (Pedro Responde) – Mystical Web App

[![Docker Hub](https://img.shields.io/docker/pulls/elemusbarrios/peter-answers.svg)](https://hub.docker.com/r/elemusbarrios/peter-answers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-3178C6.svg)
![Framework: React](https://img.shields.io/badge/Frontend-React-61DAFB.svg)
![Backend: Express](https://img.shields.io/badge/Backend-Express-000000.svg)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20now-2ea44f?logo=google-chrome&logoColor=white)](https://peteranswers.zfrap0.easypanel.host/)

---

# Overview

This project is a full-stack web application inspired by the mystical "Peter Answers" (Pedro Responde) game – an interactive fortune-telling website where users can ask questions and receive mysterious answers.  

The app features a crystal ball interface with floating orbs, supports both English and Spanish languages, and includes a hidden “secret mode” for predetermined responses. It’s built with a modern stack: React frontend, Express backend, PostgreSQL database, and TypeScript for type safety.

---

# System Architecture

## Frontend Architecture
- **Framework**: React 18 + TypeScript for strong typing and modern development practices
- **Styling**: Tailwind CSS + shadcn/ui for consistent, customizable components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks with custom hooks (`useGameState`, `useToast`) for game logic
- **Data Fetching**: TanStack Query for server state and caching
- **Build Tool**: Vite for fast development and optimized builds

## Backend Architecture
- **Framework**: Express.js with TypeScript, providing REST API endpoints
- **Database Integration**: Drizzle ORM for type-safe queries with PostgreSQL
- **Session Management**: Express-session with connect-pg-simple or in-memory storage
- **Error Handling**: Centralized error middleware with proper HTTP codes
- **Development**: Hot reload with `tsx` and middleware integration for smooth local dev

## Data Storage
- **Database**: PostgreSQL (Neon serverless ready)
- **ORM**: Drizzle ORM with schema definition and migrations via Drizzle Kit
- **Schema**: Simple user/session schema for game state and authentication
- **Migrations**: Automated migrations for schema evolution

## Component Design
- **UI Components**: Comprehensive shadcn/ui system (forms, dialogs, navigation, cards)
- **Custom Components**: Mystical-themed (CrystalBall, FloatingOrbs, MysticalInput, AnswerDisplay)
- **Responsive Design**: Mobile-first with Tailwind responsive utilities
- **Accessibility**: ARIA attributes, keyboard navigation, and screen-reader support

---

# Application Features

- 🌐 **Multilingual Support**: Toggle between English and Spanish dynamically  
- 🔮 **Game Logic**: Random mystical responses with typewriter effect  
- 👻 **Secret Mode**: Hidden input with “.” prefix lets you predetermine answers  
- ✨ **Visual Effects**: Floating orbs, crystal ball animations, typewriter text  
- 📋 **Form Handling**: React Hook Form + Zod validation for input correctness  
- 📱 **Responsive UI**: Works across desktop and mobile  

---

# External Dependencies

## Core Frameworks
- **React**: Frontend UI framework
- **Express**: Backend REST API framework
- **Vite**: Build and dev server
- **TypeScript**: Strong typing for frontend + backend

## Database & ORM
- **@neondatabase/serverless**: PostgreSQL connection (serverless ready)
- **drizzle-orm**: Type-safe database operations
- **drizzle-kit**: Schema management and migrations
- **connect-pg-simple**: PostgreSQL session store

## UI & Styling
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Component library built on Radix primitives
- **@radix-ui/***: Accessible headless UI components
- **class-variance-authority**: Variant management for components
- **Lucide React**: Icon set

## State Management & Forms
- **@tanstack/react-query**: Server state & caching
- **React Hook Form**: Form state & validation
- **@hookform/resolvers**: Validation resolvers
- **Zod**: Schema validation

## Development Tools
- **tsx**: TypeScript runner with hot reload
- **esbuild**: Bundler for backend code
- **PostCSS + Autoprefixer**: CSS post-processing
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for dev
- **@replit/vite-plugin-cartographer**: Replit dev tooling

## Other Libraries
- **date-fns**: Date utilities
- **wouter**: Lightweight routing
- **cmdk**: Command palette
- **embla-carousel-react**: Carousel/slider
- **ws**: WebSocket support for realtime features

---

# Deployment

- **Containerization**: Multi-stage Dockerfile builds frontend (Vite) and backend (esbuild) into a single lightweight Node runtime.
- **Makefile**: Provides targets to build, run, publish, and push to Docker registries.
- **EasyPanel Ready**: The published Docker image can be deployed directly to EasyPanel with exposed port `3000`.

---

## 🔮 How the Trick Works (Secret Mode)

This app recreates the classic **“Peter Answers / Pedro Responde”** game.  
The trick is simple: you secretly type the real answer in the **Request** field while everyone else sees a normal ceremonial phrase.

---

### 🧠 Core idea

- There are two inputs: **Request** (ceremonial phrase) and **Question** (what you ask).
- You type your **real answer** *hidden* between two periods `.` inside the **Request** field.
- While you type the hidden text, the screen shows the normal phrase:
  > `Peter, please answer this question...`
- When you **close the hidden answer** with another `.` (period), secret mode ends.  
  You can then finish the ceremonial sentence normally.
- Type the **Question** (e.g., “Will it rain today?”) and click **Ask** — the app will display the hidden answer.

---

### ✍️ Step by step

1. Focus the **Request** field.
2. Start with a period `.` and **type your real answer** (this stays hidden).  
   - Example: `.Yes, take an umbrella`
3. Close the answer with another period `.` (you exit secret mode).
4. Continue typing anything to complete the phrase, e.g.  
   `Peter, please answer this question:`
5. In the **Question** field, type the question (e.g., `Will it rain today?`).
6. Press **Ask** → Output: `Yes, take an umbrella`.

---

### 🧩 Quick example

- **What you actually type in Request**  
  ```
  .Tomorrow at 7:15, by the blue door.Peter, please answer this question:
  ```
- **Question**  
  ```
  What time and where will it be?
  ```
- **Result after clicking “Ask”**  
  ```
  Tomorrow at 7:15, by the blue door.
  ```

---

### ✅ Key rules

- Always **open and close** the hidden answer with `.` inside **Request**.
- Everything **between the two dots** is the real answer.
- After the second `.`, you’re out of secret mode; type the ceremonial phrase normally.
- The **Question** just triggers the reveal — the answer is what you hid.

---

### 🧪 Tips for a perfect demo

- Practice the `.` → (answer) → `.` gesture a couple of times.
- When in secret mode, **type without looking at the screen** to avoid giving it away.
- If you make a mistake, **backspace** before closing with the second `.`.
- Keep answers short and natural.

---

### ❓ FAQ

**I forgot to close with `.` — now what?**  
Clear the Request field and start again.

**Does it work on mobile?**  
Yes, but it’s easier with a physical keyboard.

**I used the dots but nothing shows.**  
Make sure your answer was **between** the two dots and you clicked **Ask**.

---

### ⚠️ Please use responsibly

This is a party trick for fun and entertainment. Don’t use it to deceive or harm others.

---

### 🛠️ Technical note (for the curious)

- The Request field watches for a leading `.`. Until the second `.`, keystrokes go into a **hidden buffer** while the UI prints the ceremonial phrase.
- After the second `.`, the field behaves normally.
- On **Ask**, the app returns the **hidden buffer** as the final answer.


# License

MIT License – free to use and modify.  
Mystical theme and branding are for fun demo purposes only.

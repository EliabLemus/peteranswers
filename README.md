# Overview

This project is a full-stack web application inspired by the mystical "Peter Answers" (Pedro Responde) game – an interactive fortune-telling website where users can ask questions and receive mysterious answers.  

The app features a crystal ball interface with floating orbs, supports both English and Spanish languages, and includes a hidden “secret mode” for predetermined responses. It’s built with a modern stack: React frontend, Express backend, PostgreSQL database, and TypeScript for type safety.

# User Preferences

Preferred communication style: Simple, everyday language.  
The app’s design is playful, accessible, and easy to use for anyone curious about mystical answers.

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

# License

MIT License – free to use and modify.  
Mystical theme and branding are for fun demo purposes only.

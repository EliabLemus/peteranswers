# Overview

This is a full-stack web application built as a mystical "Peter Answers" (Pedro Responde) game - an interactive fortune-telling website that provides answers to user questions. The app features a crystal ball interface with floating mystical elements, supports both English and Spanish languages, and includes a secret mode for predetermined answers. Built with React frontend, Express backend, and PostgreSQL database using modern development practices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, customizable UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks (useState, useCallback) with custom hooks for game logic
- **Data Fetching**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database Integration**: Drizzle ORM for type-safe database operations with PostgreSQL
- **Session Management**: Built-in storage abstraction with both in-memory and database implementations
- **Development**: Hot module replacement and development middleware integration
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Storage
- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM for schema definition, migrations, and type-safe queries
- **Schema**: User management with username/password authentication structure
- **Connection**: Neon Database serverless PostgreSQL connection
- **Migrations**: Automated database migrations with Drizzle Kit

## Component Design
- **UI Components**: Comprehensive shadcn/ui component system including forms, dialogs, cards, and interactive elements
- **Custom Components**: Mystical-themed components (CrystalBall, FloatingOrbs, MysticalInput)
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Accessibility**: ARIA labels and keyboard navigation support throughout

## Application Features
- **Multilingual Support**: Dynamic language switching between English and Spanish
- **Game Logic**: Random answer generation with mystical responses
- **Secret Mode**: Hidden functionality for predetermined answers (triggered with "." prefix)
- **Visual Effects**: CSS animations for floating elements, crystal ball effects, and typewriter text
- **Form Handling**: React Hook Form with Zod validation schemas

# External Dependencies

## Core Framework Dependencies
- **React**: Frontend UI framework with hooks and modern patterns
- **Express**: Backend web framework for REST API
- **Vite**: Build tool and development server
- **TypeScript**: Type system for both frontend and backend

## Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migrations and schema management
- **connect-pg-simple**: PostgreSQL session store

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI primitives
- **@radix-ui/***: Headless UI components for accessibility
- **class-variance-authority**: Component variant management
- **Lucide React**: Icon library

## State Management & Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Form validation resolvers
- **Zod**: Schema validation library

## Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **PostCSS**: CSS processing with Autoprefixer

## Additional Libraries
- **date-fns**: Date manipulation and formatting
- **wouter**: Lightweight routing library
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality
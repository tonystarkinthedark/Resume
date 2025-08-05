# Overview

This is a modern portfolio/CV website for Ahmed Ibrahim, a Digital Marketing & Automation Expert. The application is built as a full-stack TypeScript application using React for the frontend and Express.js for the backend. It features a professional portfolio showcasing Ahmed's experience, skills, achievements, and includes functionality for contact form submissions and resume downloads.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes

## January 2025 - Complete Parallax Transformation  
- Transformed entire site into immersive parallax scrolling experience
- Added dynamic parallax background elements that respond to scroll position
- Implemented comprehensive scroll-triggered animations (slide-in, scale, text-reveal)
- Created guided storytelling flow with progressive content disclosure
- Added visual scroll progress indicator for navigation feedback
- Enhanced all sections with staggered entrance animations
- Created dedicated headshot section for professional photo placement
- Repositioned scroll indicator to bottom-right to avoid UI conflicts
- Optimized section spacing (py-32) for proper visual flow
- Added floating background elements with depth and movement
- Enhanced hover effects with scale transforms throughout
- Implemented cinematic user experience with smooth transitions

# System Architecture

## Frontend Architecture

**Framework & Styling**
- **React 18** with TypeScript for component-based UI development
- **Tailwind CSS** for utility-first styling with custom dark theme design
- **shadcn/ui** component library providing pre-built, accessible UI components
- **Wouter** for lightweight client-side routing
- **Vite** as the build tool and development server

**State Management & Data Fetching**
- **TanStack Query** (React Query) for server state management and caching
- Custom hooks for mobile detection and toast notifications
- Form state managed through React Hook Form with Zod validation

**UI/UX Design**
- Dark theme with navy/cyan color scheme optimized for marketing appeal
- Fully responsive design with mobile-first approach
- Glass morphism effects and gradient animations
- Smooth scrolling navigation between sections

## Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for RESTful API endpoints
- Custom middleware for request logging and error handling
- Static file serving with development/production environment handling

**Database & Storage**
- **Drizzle ORM** configured for PostgreSQL with Neon Database integration
- In-memory storage fallback for development using Map-based data structures
- Database migrations managed through Drizzle Kit

**Core Features**
- Contact form submission with email notifications
- PDF resume generation and download functionality
- Request logging and error handling middleware

## External Dependencies

**Database Services**
- **Neon Database** (PostgreSQL) for production data storage
- Drizzle ORM for type-safe database operations and schema management

**Email Services**
- **Nodemailer** for sending email notifications from contact form submissions
- Gmail SMTP integration with app password authentication

**PDF Generation**
- **PDFKit** for server-side PDF document creation and resume generation

**Development Tools**
- **Replit** integration with cartographer plugin for development environment
- **TSX** for TypeScript execution in development
- **ESBuild** for production bundling

**UI Component Libraries**
- **Radix UI** primitives for accessible, unstyled components
- **Lucide React** for consistent iconography
- **Class Variance Authority** for component variant management

The architecture follows a clean separation of concerns with shared TypeScript schemas between frontend and backend, ensuring type safety across the full stack. The application is optimized for deployment on Replit with proper environment configuration for both development and production modes.
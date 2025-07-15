# Wrapped USDT (wUSDT) Solana Token Website

## Overview

This is a React/TypeScript application that provides a comprehensive website for the Wrapped USDT (wUSDT) token on the Solana blockchain. The application features live price data, token statistics, trading information, and social media integration for the wUSDT token project.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with a clear separation between client and server:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives for accessible components

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage (development) with planned database integration
- **Development**: Hot module replacement via Vite middleware

## Key Components

### Client-Side Components
- **Navigation**: Fixed navigation with smooth scrolling
- **Hero Section**: Landing page with live token price display
- **Token Overview**: Token statistics and features
- **Network Information**: Solana blockchain resources and links
- **Trading Interface**: Live market data and trading platform access
- **Security Features**: Token security and lock information
- **Documentation**: Resource links and guides

### Server-Side Components
- **Express Server**: RESTful API server with middleware
- **Storage Layer**: Abstract storage interface with memory and database implementations
- **Route Handler**: API endpoints for token data and live price feeds
- **Development Server**: Vite integration for hot reloading

### Database Schema
- **Users**: User authentication and management
- **Token Data**: Price, market cap, volume, supply, and social media links
- **Chain Data**: Blockchain network configuration and metadata

## Token Information
- **Symbol**: wUSDT
- **Name**: Wrapped USDT
- **Blockchain**: Solana
- **Contract Address**: 57GajvDHazpCCCCpKgiHppJJf5cjwHWancCZZLPoeFMj
- **Total Supply**: 10,000,000,000 wUSDT
- **Circulating Supply**: 9,990,000,000 wUSDT
- **Locked Tokens**: 2,000,000,000 wUSDT (via Jupiter Lock)
- **Current Holders**: 121

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Data flows back through the API to update UI state

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Radix UI, Tailwind CSS
- **Data Fetching**: TanStack Query for server state
- **Utilities**: Class variance authority, clsx, date-fns
- **Icons**: Lucide React icons, Font Awesome

### Backend Dependencies
- **Database**: PostgreSQL via Neon serverless, Drizzle ORM
- **Session**: Connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, ESBuild for production builds

### Development Tools
- **TypeScript**: Full type safety across the stack
- **Vite**: Fast development server and build tool
- **PostCSS**: CSS processing with Tailwind
- **ESLint/Prettier**: Code formatting and linting (implied)

## Deployment Strategy

### Development Setup
- **Dev Server**: Vite development server with HMR
- **Database**: Local PostgreSQL or Neon serverless
- **Environment**: NODE_ENV=development with tsx

### Production Build
- **Frontend**: Vite build outputs to `dist/public`
- **Backend**: ESBuild compiles server to `dist/index.js`
- **Database**: Drizzle migrations via `db:push` command
- **Deployment**: Node.js production server

### Key Configuration
- **Build Command**: `npm run build` (builds both frontend and backend)
- **Start Command**: `npm start` (runs production server)
- **Database URL**: Required environment variable for PostgreSQL connection
- **Static Assets**: Served from `dist/public` in production

The application is designed to be deployed on platforms like Replit, with support for both development and production environments through environment variable configuration.
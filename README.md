# Product Listing App

This is a basic product listing app built as part of **Whatbytes Frontend Assignment**. It's an ecommerce-like application where users can browse products, view details, and more.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - For type safety
- **Tailwind CSS** - For styling
- **React** - Frontend library

## Current Status

**Latest Update**: Added product data and API endpoints

I've made good progress on the backend setup:

- Created the Next.js app with TypeScript
- Added Tailwind CSS for styling
- Set up the basic folder structure for organizing components, services, stores, etc.
- **NEW**: Added `products.json` file with sample product data (fetched from dummy JSON API)
- **NEW**: Created API endpoints:
  - `GET /api/products` - Get all products
  - `GET /api/products/[id]` - Get specific product by ID

## API Endpoints

### Get All Products

```bash
GET /api/products
```

### Get Product by ID

```bash
GET /api/products/78
```

## Data Source

The product data is stored in `data/products.json` and contains real product information fetched from a dummy JSON API. This includes:

- Product details (title, description, price)
- Product images and thumbnails
- Stock information
- Ratings and reviews
- Categories and tags

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

```
app/          # Next.js app directory
  api/        # API routes for products
components/   # Reusable UI components
data/         # Static data (products.json with sample data)
hooks/        # Custom React hooks
lib/          # Utility functions and configurations
services/     # API calls and external services
stores/       # State management
types/        # TypeScript type definitions
public/       # Static assets
```

## What's Next

Planning to add:

- Product listing page
- Product detail view
- Search and filter functionality
- Shopping cart (if needed)
- Responsive design

## Notes

This project is part of my internship application process. Building it step by step to showcase my frontend development skills.

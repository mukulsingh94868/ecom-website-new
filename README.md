# E-Commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Context API. Features dynamic product filtering, detailed product views, and a shopping cart system.

## 🚀 Features

- **Product Catalog**: Browse products with real-time API integration
- **Dynamic Filtering**: Multi-select checkbox for category filters
- **Product Details**: View detailed information about individual products
- **Shopping Cart**: Add products to cart with context-based state management
- **TypeScript Support**: Fully typed for better development experience

## 📋 Project Structure

```
src/
├── api/                 # API integration
│   └── productApi.ts    # Product and category API calls
├── component/           # Reusable React components
│   ├── Header.tsx       # Header component
│   ├── Footer.tsx       # Footer component
│   └── ProductCard.tsx  # Product card component
├── context/             # React Context
│   └── CartContext.tsx  # Shopping cart context
├── data/                # Static data
│   └── products.ts      # Product data
├── pages/               # Page components
│   ├── Home.tsx         # Home page with filters
│   └── ProductDetail.tsx # Product detail page
├── types/               # TypeScript types
│   └── index.tsx        # Type definitions
├── App.tsx              # Main app component
├── index.tsx            # Entry point
├── App.css              # Styles
└── index.css            # Global styles
```

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management
- **CSS** - Styling

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd ecom-website-new
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🔌 API Integration

The project uses the **Fake Store API** (`https://api.escuelajs.co/api/v1`):

- **GET** `/products` - Fetch all products
- **GET** `/products?categoryId={id}` - Fetch products by category
- **GET** `/products/{id}` - Fetch product details by ID
- **GET** `/categories` - Fetch all categories

## 📖 Key Components

### Home.tsx

- Displays product grid with multi-select category filters
- Dynamically fetches products based on selected categories
- Shows "No product found" when no products match filters

### ProductDetail.tsx

- Fetches individual product details using `fetchProductById`
- Uses `useEffect` for dynamic data loading based on product ID
- Displays loading and error states

### ProductCard.tsx

- Reusable component for displaying product information
- Links to product detail page
- Add to cart functionality

### CartContext.tsx

- Global state management for shopping cart
- Provides `addToCart` functions

## 🎨 Styling

The project uses CSS modules with a responsive design. Key style files:

- `App.css` - Component styles
- `index.css` - Global styles

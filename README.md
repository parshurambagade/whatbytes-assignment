# 🛒 Whatbytes Frontend Assignment – E-commerce App

This is a fully responsive, filterable e-commerce app built using **Next.js** and **Tailwind CSS**, featuring product listing, product details, smart cart functionality, and URL-based filtering/search — all implemented with client-side logic and persisted state using Zustand and localStorage.

---

## 🚀 Live Demo

[🔗 View Deployed App on Vercel](https://whatbytes-assignment-beta.vercel.app/)

![Demo Preview](https://whatbytes-assignment-beta.vercel.app/demo.gif)

---

## 📌 Features

### ✅ Core Functionality

- 🏠 Home page with:
  - Category and price range filters
  - Search bar with real-time filtering
  - URL-based query filters (`category`, `minPrice`, `maxPrice`, `q`)
  - Responsive product grid
- 📄 Product detail page:
  - Dynamic route `/product/[id]`
  - Quantity management
  - Add to cart support
- 🛒 Cart page:
  - Local cart state with quantity controls
  - Remove items and clear cart
  - Cart summary and persistent storage

### 💡 Extras

- 🔁 Smart filter reset when category changes
- 🔗 Bookmarkable URLs with filters/search states
- 🍞 Toast notifications for all user actions
- 🧭 Reusable back buttons for easy navigation
- 🎨 Fully responsive across desktop, tablet, and mobile

---

## 🧱 Tech Stack

| Tech                   | Usage                                      |
| ---------------------- | ------------------------------------------ |
| **Next.js App Router** | Routing, dynamic pages, API endpoints      |
| **Tailwind CSS**       | UI styling with responsive design          |
| **Zustand**            | State management (products, cart, filters) |
| **localStorage**       | Cart state persistence                     |
| **react-hot-toast**    | Toast notifications                        |

---

## 🗂️ Project Structure

```
whatbytes/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── product/[id]/
│   │   └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   └── api/
│       └── products/
├── components/
│   ├── layouts/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── ProductCard.tsx
│   │   ├── FilterSidebar.tsx
│   │   └── Categories.tsx
│   ├── common/
│   │   ├── BackButton.tsx
│   │   └── QuantityButtons.tsx
│   └── providers/
├── data/
│   └── products.json
├── hooks/
│   ├── useFilters.tsx
│   ├── useAllProducts.tsx
│   └── useProductDetails.tsx
├── services/
│   └── productService.ts
├── stores/
│   ├── products.store.ts
│   └── cart.store.ts
├── types/
│   ├── products.type.ts
│   └── stores.type.ts
└── lib/
    └── utils.ts
```

---

## 📦 API Routes (Mocked with `products.json`)

| Endpoint                 | Description           |
| ------------------------ | --------------------- |
| `GET /api/products`      | Returns all products  |
| `GET /api/products/[id]` | Returns product by ID |

Data is fetched from `/data/products.json` internally for mocking real API behavior.

---

## 📋 Assignment Requirements Checklist

### ✅ Must-Have Features

- Header with logo, search, cart badge, profile
- Category filter (radio)
- Price range slider (interactive)
- Product grid (responsive)
- Product card with image, title, price, add-to-cart
- Product detail page with quantity + add to cart
- Cart page with quantity update, remove, clear
- Filtering with category + price + search
- URL-based filters using query params
- State management using Zustand
- Cart state persistence with localStorage
- Responsive design
- Feature-based commits

### 🎁 Bonus Features (Added)

- Reusable back button on detail/cart pages
- Toast notifications for all user actions
- Clear UX for error/empty states
- Persist search + filters via URL

---

## 🧪 Future Improvements

- Add login/auth and connect cart with Supabase
- Add user reviews and ratings
- Implement pagination or infinite scroll
- Server-side filtering for large datasets

---

## 📑 Author

**Parshuram Bagade**  
Frontend Developer from Pune, India  
[Portfolio](https://mrparshu.live/) • [LinkedIn](https://linkedin.com/in/parshuram-bagade/)

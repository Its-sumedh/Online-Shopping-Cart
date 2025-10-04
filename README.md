# 🛒 Shopping Cart (React + Vite)
A minimal shopping cart application built with Next.js, React, and Tailwind CSS. This project demonstrates a complete e-commerce flow with product listing, cart management, and checkout functionality

## ⚙️ Setup Instructions

### 1. Clone the repository
git clone https://github.com/Its-sumedh/Online-Shopping-Cart.git
cd Online-Shopping-Cart

### 2. Install dependencies
npm install

### 3. Run locally
npm run dev

Now open: http://localhost:5173


## Assumptions & Design Choices

1. Products are mocked in src/api/products.js (simulating an API call).
2. Cart state is managed using React Context (src/context/cart-context.js).
3. Data persistence is handled via localStorage.
4. The app uses only React + Vite (no Redux) for simplicity.
5. UI is styled with TailwindCSS for responsiveness.

## Features

- **Product Catalog**: Display 10 tech products in a responsive grid
- **Add to Cart**: Add products to cart with quantity management
- **Cart Persistence**: Cart data saved to localStorage
- **Cart Modal**: Sliding cart view with item list and total price
- **Quantity Controls**: Increase, decrease, or remove items from cart
- **Checkout API**: Backend endpoint that processes orders
- **Client-Side State**: Global cart state using React Context


### Cart State Management

- **Context Provider**: `CartProvider` wraps the entire app in `layout.jsx`
- **State**: Cart items stored in React state and synced to localStorage
- **Actions**: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
- **Persistence**: Cart automatically saves to localStorage on every change

## Key Features Explained

### localStorage Persistence
Cart data is automatically saved to browser storage and restored on page reload:
\`\`\`javascript
localStorage.setItem('cart', JSON.stringify(items))
\`\`\`

### Quantity Management
- Click **+** to increase quantity
- Click **-** to decrease quantity (removes if quantity reaches 0)
- Click **trash icon** to remove item immediately

### Total Price Calculation
Cart automatically calculates total price based on item quantities and prices.

## Customization

### Adding More Products
Edit `src/api/products.js` and add more items to the products array.

### Changing Styles
All styling uses Tailwind CSS classes. Modify the className attributes in components to change appearance.

### Adding Database
Replace the hardcoded products array with database queries (Supabase, Neon, etc.).

## Notes

- No database required - products are hardcoded
- No authentication - simple demo app
- No payment processing - checkout only logs to console
- No global CSS file - all styling is inline with Tailwind
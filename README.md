# DzTech Store ⚡

A small React e-commerce frontend created for the WAMD TP-TP 2 lab. The idea is a simple tech-accessories shop with a little Algerian identity and a warm, modern design.

## Features

- Product catalog with product images, prices in DZD, ratings and labels
- Search products by name
- Filter products by category
- Add products to the shopping bag
- Increase/decrease item quantities and remove items
- Cart count and subtotal update automatically
- Local component state for search, filters, favourites and cart drawer
- Redux Toolkit store for shared shopping-cart state
- Responsive layout for desktop and mobile

> This is a frontend lab project. It does not include a backend, user accounts, real checkout or payments.

## Technologies

- React and JSX
- JavaScript (ES6+)
- Redux Toolkit
- React-Redux
- Vite
- Lucide React icons
- CSS

## Main components

- `App.jsx` — page layout, product search and category filters
- `Header.jsx` — store branding, navigation and cart count
- `ProductCard.jsx` — reusable product card and add-to-cart button
- `CartPanel.jsx` — shopping cart, quantities, removal and subtotal
- `store.js` — Redux store, actions and reducer logic
- `data/products.js` — sample product data

## Redux state

The Redux store has a `cart` slice with an `items` array. Each cart item contains product information and a `quantity`.

Actions:
- `addToCart`
- `removeFromCart`
- `increaseQuantity`
- `decreaseQuantity`
- `clearCart`

React components read the shared cart state with `useSelector` and update it with `useDispatch`.

```



   `https://amaitsaid-maker.github.io/dztech-store/`



## Student information

- Student name: AIT SAID Mehdi
- Module: WAMD
- Application: DzTech Store

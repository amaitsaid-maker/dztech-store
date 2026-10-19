import { ShoppingBag, Zap } from 'lucide-react'
import { useSelector } from 'react-redux'

export default function Header({ onCartClick, activeCategory, onCategoryChange }) {
  const count = useSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  )

  const categories = ['All products', 'Audio', 'Accessories', 'Workspace']

  return (
    <>
      <div className="announcement">A little upgrade for your everyday setup <span>✦</span> Shop local favourites</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DzTech Store home">
          <span className="brand-mark"><Zap size={21} fill="currentColor" /></span>
          <span>dztech<span className="brand-dot">.</span><small>STORE</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Product categories">
          {categories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? 'nav-link active' : 'nav-link'}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </nav>
        <button className="cart-button" onClick={onCartClick} aria-label={`Open cart, ${count} items`}>
          <ShoppingBag size={19} />
          <span className="cart-label">My bag</span>
          <span className="cart-count">{count}</span>
        </button>
      </header>
    </>
  )
}

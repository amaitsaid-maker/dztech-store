import { ArrowDownRight, ArrowRight, Search, ShieldCheck, Truck, Headphones } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import CartPanel from './components/CartPanel'
import { products } from './data/products'

const categories = ['All products', 'Audio', 'Accessories', 'Workspace']

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All products')
  const [searchTerm, setSearchTerm] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartCount = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))

  const visibleProducts = useMemo(() => products.filter(product => {
    const matchesCategory = activeCategory === 'All products' || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  }), [activeCategory, searchTerm])

  const scrollToProducts = () => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div id="top">
      <Header onCartClick={() => setIsCartOpen(true)} activeCategory={activeCategory} onCategoryChange={category => { setActiveCategory(category); scrollToProducts() }} />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-line" /> TECH THAT JUST MAKES SENSE</div>
            <h1>Good gear.<br /><span>Better everyday.</span></h1>
            <p>Little upgrades can make a big difference. Find your next favourite tech essential, without the complicated shopping experience.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={scrollToProducts}>Explore the collection <ArrowRight size={17} /></button>
              <span className="hero-note"><ArrowDownRight size={17} /> Curated for your setup</span>
            </div>
            <div className="hero-stats">
              <div><strong>06</strong><span>carefully picked items</span></div>
              <div><strong>100%</strong><span>student project energy</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="hero-image-frame">
              <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1100&q=90" alt="A collection of modern electronic devices" />
            </div>
            <div className="floating-note"><span className="note-dot" /><div><strong>Small upgrades</strong><span>Big difference.</span></div></div>
            <div className="hero-number">DZ / 01</div>
          </div>
          <div className="hero-side-label">THE EVERYDAY EDIT — 2026</div>
        </section>

        <section className="benefits">
          <div><span className="benefit-icon"><Truck size={19} /></span><div><strong>Simple shopping</strong><span>No fuss, just good gear</span></div></div>
          <div><span className="benefit-icon"><ShieldCheck size={19} /></span><div><strong>Picked with care</strong><span>Useful tech essentials</span></div></div>
          <div><span className="benefit-icon"><Headphones size={19} /></span><div><strong>For your setup</strong><span>Study, work and play</span></div></div>
        </section>

        <section className="catalog-section" id="products">
          <div className="section-top">
            <div><span className="eyebrow">THE COLLECTION / 01</span><h2>Find your next <span>favourite.</span></h2><p>Everyday essentials, picked to keep things simple.</p></div>
            <div className="catalog-count">SHOWING <strong>{visibleProducts.length.toString().padStart(2, '0')}</strong> ITEMS</div>
          </div>
          <div className="catalog-controls">
            <div className="category-tabs">
              {categories.map(category => <button key={category} className={activeCategory === category ? 'category-tab selected' : 'category-tab'} onClick={() => setActiveCategory(category)}>{category}</button>)}
            </div>
            <label className="search-box"><Search size={17} /><input value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Find a product..." aria-label="Search products" />{searchTerm && <button onClick={() => setSearchTerm('')} aria-label="Clear search">×</button>}</label>
          </div>
          {visibleProducts.length > 0 ? <div className="product-grid">{visibleProducts.map(product => <ProductCard key={product.id} product={product} />)}</div> : <div className="no-results"><Search size={25} /><h3>No gear found</h3><p>Try another search or category.</p><button className="text-button" onClick={() => { setSearchTerm(''); setActiveCategory('All products') }}>Reset filters</button></div>}
          <div className="catalog-footnote"><span>✳</span> A small collection with big potential. More items coming soon.</div>
        </section>

        <section className="bottom-banner">
          <div><span className="eyebrow">A NOTE FROM DZTECH</span><h2>Your setup should work <em>for you.</em></h2><p>This little shop is a student project built with React and Redux. Thanks for taking a look!</p></div>
          <button className="banner-button" onClick={() => { setActiveCategory('All products'); setSearchTerm(''); scrollToProducts() }}>Back to the collection <ArrowRight size={17} /></button>
          <span className="banner-decoration">DZ.</span>
        </section>
      </main>
      <footer className="site-footer"><a className="footer-brand" href="#top">dztech<span>.</span></a><span>Made for the everyday setup <span className="footer-star">✦</span></span><span>WAMD · React + Redux · 2026</span></footer>
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <button className="mobile-cart-fab" onClick={() => setIsCartOpen(true)} aria-label={`Open cart with ${cartCount} items`}><span>Bag ({cartCount})</span></button>
    </div>
  )
}

import { Heart, Plus, Star } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store'

const money = amount => `${amount.toLocaleString('fr-DZ')} DA`

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        {product.label && <span className="product-label">{product.label}</span>}
        <button
          className={isFavorite ? 'favorite-button favorited' : 'favorite-button'}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
        >
          <Heart size={17} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="product-info">
        <div className="product-meta"><span>{product.category}</span><span><Star size={13} fill="currentColor" /> {product.rating}</span></div>
        <h3>{product.name}</h3>
        <div className="product-bottom">
          <div className="price-line">
            <strong>{money(product.price)}</strong>
            {product.oldPrice && <del>{money(product.oldPrice)}</del>}
          </div>
          <button className="add-button" onClick={() => dispatch(addToCart(product))} aria-label={`Add ${product.name} to cart`}>
            <Plus size={19} />
          </button>
        </div>
      </div>
    </article>
  )
}

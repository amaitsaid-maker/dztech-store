import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../store'

const money = amount => `${amount.toLocaleString('fr-DZ')} DA`

export default function CartPanel({ isOpen, onClose }) {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      {isOpen && <button className="drawer-backdrop" onClick={onClose} aria-label="Close cart overlay" />}
      <aside className={isOpen ? 'cart-drawer open' : 'cart-drawer'} aria-hidden={!isOpen}>
        <div className="drawer-heading">
          <div><span className="eyebrow">YOUR SELECTION</span><h2>My bag <span>({count})</span></h2></div>
          <button className="icon-button" onClick={onClose} aria-label="Close cart"><X /></button>
        </div>
        {items.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-icon"><ShoppingBag size={28} /></span>
            <h3>Your bag is taking a break.</h3>
            <p>Add something useful and it will show up here.</p>
            <button className="primary-button" onClick={onClose}>Explore products</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <strong>{money(item.price)}</strong>
                    <div className="quantity-row">
                      <div className="quantity-control">
                        <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label="Decrease quantity"><Minus size={13} /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label="Increase quantity"><Plus size={13} /></button>
                      </div>
                      <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14} /> Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="summary-line"><span>Subtotal</span><strong>{money(total)}</strong></div>
              <p>Delivery costs are not included in this demo.</p>
              <button className="primary-button full-width" onClick={() => window.alert('Thanks for trying DzTech Store! Checkout is a demo feature.')}>Continue to checkout <span>↗</span></button>
              <button className="clear-button" onClick={() => dispatch(clearCart())}>Clear bag</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

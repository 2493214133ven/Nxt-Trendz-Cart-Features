import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const onClickRemove = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <div className="remove-container">
                  <button
                    data-testid="remove"
                    className="remove-btn"
                    type="button"
                    onClick={onClickRemove}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                <div className="cart-summary-container">
                  <CartSummary />
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart

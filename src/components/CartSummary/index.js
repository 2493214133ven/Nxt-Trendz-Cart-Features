// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let Amount = 0
      cartList.forEach(element => {
        Amount += element.price * element.quantity
      })

      const count = cartList.length

      return (
        <div className="cart-summary-card">
          <h1 className="total-amount">
            Order Total: <span className="span-ele">Rs {Amount} /-</span>
          </h1>

          <p className="count">{count} Items in cart</p>
          <button className="checkOut-btn" type="button">
            CheckOut
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

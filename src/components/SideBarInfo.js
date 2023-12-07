import { useState } from "react";

export function SideBarInfo({
  content,
  onXClick,
  selectedProduct,
  cart,
  onUpdateCart,
}) {
  return (
    <div>
      {content === "info" && (
        <Info onXClick={onXClick} selectedProduct={selectedProduct} />
      )}
      {content === "cart" && (
        <Cart
          onXClick={onXClick}
          cart={cart}
          onUpdateCart={onUpdateCart}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
}
function Cart({ onXClick, cart, onUpdateCart }) {
  return (
    <>
      <div className="cart-div">
        <div className="my-order">
          <span>My Order</span>
          <button className="closing-btn" onClick={() => onXClick("")}>
            &Chi;
          </button>
        </div>
        {cart.map((item) => (
          <ProductsInCart
            key={item.id}
            item={item}
            onUpdateCart={onUpdateCart}
          />
        ))}
      </div>
      <Checkout cart={cart} />
    </>
  );
}
function ProductsInCart({ item, onUpdateCart }) {
  const [quantity, setQuantity] = useState(item.quantity);
  if (quantity !== item.quantity) {
    setQuantity(item.quantity);
  }
  return (
    <div className="product-cart-div">
      <figure className="product-fig-cart">
        <img className="product-img-cart" src={item.image} alt={item.title} />
      </figure>
      <div>
        <div className="price-quantity-cart">
          <p>${item.price}</p>
          <button
            onClick={() => {
              if (quantity === 0) return;
              setQuantity(quantity - 1);
              onUpdateCart(item, quantity - 1);
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => {
              setQuantity(quantity + 1);
              onUpdateCart(item, quantity + 1);
            }}
          >
            +
          </button>
        </div>
        <p className="product-info">{item.title}</p>
      </div>
      <button
        className="closing-btn"
        onClick={() => {
          setQuantity(0);
          onUpdateCart(item, 0);
        }}
      >
        &Chi;
      </button>
    </div>
  );
}
function Info({ selectedProduct, onXClick }) {
  return (
    <div className="product-info-div">
      <button className="closing-btn" onClick={() => onXClick("")}>
        &Chi;
      </button>
      <figure className="product-fig">
        <img
          className="product-img"
          src={selectedProduct.image}
          alt={selectedProduct.category}
        />
      </figure>
      <div>
        <div className="product-info-price">
          <p>${selectedProduct.price}</p>
        </div>
        <p className="product-info">{selectedProduct.title}</p>
        <p className="product-info">{selectedProduct.description}</p>
      </div>
    </div>
  );
}
function Checkout({ cart }) {
  function calcTotalPrice(cart) {
    if (cart.length === 0) return 0;
    const total = cart
      .map((item) => item.price * item.quantity)
      .reduce((item, cur) => Number((item + cur).toFixed(2)));
    return total;
  }

  const totalPrice = calcTotalPrice(cart);

  return (
    <div className="checkout-div">
      <div className="total">
        <p>Total</p>
        <span>${totalPrice}</span>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
}

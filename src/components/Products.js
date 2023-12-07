import { useState } from "react";
import { Pagination } from "./Pagination";

export function Products({ products, onSelectProduct, onUpdateCart, cart }) {
  const [curPage, setCurpage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const productsPerPage = products.slice(
    itemsPerPage * curPage - itemsPerPage,
    itemsPerPage * curPage
  );

  return (
    <div className="products-sec">
      <select
        className="item-per-page"
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(e.target.value)}
      >
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="36">36</option>
      </select>
      <Pagination
        onSetPage={setCurpage}
        page={curPage}
        productsPerPage={productsPerPage}
        products={products}
      />
      <div className="products">
        {productsPerPage.length > 0 &&
          productsPerPage.map((product) => {
            const findItem = cart.find((element) => element.id === product.id);
            const quantity = findItem ? findItem.quantity : 0;
            return (
              <Product
                product={product}
                key={product.id}
                onSelectProduct={onSelectProduct}
                onUpdateCart={onUpdateCart}
                cart={cart}
                quantity={quantity}
              />
            );
          })}
        {productsPerPage.length === 0 && "No products to show!"}
      </div>
      <Pagination
        onSetPage={setCurpage}
        page={curPage}
        productsPerPage={productsPerPage}
        products={products}
      />
    </div>
  );
}
function Product({ product, quantity = 0, onSelectProduct, onUpdateCart }) {
  return (
    <div className="product-div">
      <figure className="product-fig" onClick={() => onSelectProduct(product)}>
        <img
          className="product-img"
          src={product.image}
          alt={product.category}
        />
      </figure>
      <div className="product-info">
        <div className="price-quantity">
          <p>${product.price}</p>
          <div>
            <button
              onClick={() => {
                if (quantity > 0) {
                  onUpdateCart(product, quantity - 1);
                }
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                onUpdateCart(product, quantity + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <p className="product-name">{product.title}</p>
      </div>
    </div>
  );
}

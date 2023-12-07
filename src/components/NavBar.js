import { useState } from "react";

export function NavBar({ onCartClick, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="nav-bar-div">
      <div className="nav-bar">
        <div className="search-bar-div">
          <form>
            <div className="search-bar">
              <input
                className="search-input"
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn-magnifier"
                onClick={(e) => {
                  e.preventDefault();
                  onSearch(searchTerm);
                }}
              >
                <img
                  src="https://www.gap.co.uk/static-content/icons/header/gap/v2/default/search-input-button.svg"
                  alt="Search Icon"
                />
              </button>
            </div>
          </form>
        </div>
        <div className="logo-div">
          <img className="logo" src="Logo.jpeg" alt="logo" />
        </div>
        <div className="cart-btn-div">
          <button className="btn-cart" onClick={() => onCartClick("cart")}>
            <img
              src="https://www.gap.co.uk/static-content/icons/header/gap/v2/default/shopping-bag-large.svg"
              alt="Shopping bag icon"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

import {
    dispatchCartUpdateEvent,
    getCartCookie,
    saveCartCookie,
  } from "./utils";
  
  import { addSelection, lineKey } from './cart-state';
  function initializeCart() {
    const quantityEls = document.querySelectorAll(
      "[data-quantity]"
    ) as NodeListOf<HTMLElement>;
    
    document.addEventListener("cart:updated", () => {
      if (!quantityEls) {
        return;
      }
    
      const cartItems = getCartCookie();
    
      quantityEls.forEach((el) => {
        const productId = el.dataset.productid;
    
        if (!productId) {
          return;
        }
    
        el.textContent = String(cartItems.find(line => lineKey(line) === `${productId}:${el.dataset.design ?? ''}`)?.quantity ?? 0);
      });
    });
    
    const productButtons = document.querySelectorAll(
      "[data-cart]"
    ) as NodeListOf<HTMLButtonElement>;
    
    productButtons.forEach((button) => {
      // Remove existing listeners
      button.removeEventListener("click", handleCartClick);
      // Add new listener
      button.addEventListener("click", handleCartClick);
    });
  }

  function handleCartClick(this: HTMLButtonElement) {
    const cartItems = getCartCookie();
    const productId = this.dataset.productid;
    const actionType = this.dataset.action;

    const newCartItems = [...cartItems];

    if (!productId || !actionType) {
      return;
    }

    if (actionType === "increment") {
      saveCartCookie(addSelection(newCartItems, productId, this.dataset.design, true));
      dispatchCartUpdateEvent();
      return;
    }

    if (actionType === "decrement") {
      const index = newCartItems.findIndex(line => lineKey(line) === `${productId}:${this.dataset.design ?? ''}`);
      if (index >= 0 && --newCartItems[index].quantity === 0) newCartItems.splice(index, 1);
    }

    saveCartCookie(newCartItems);
    dispatchCartUpdateEvent();
  }

  // Initialize on first load
  initializeCart();

  // Re-initialize after navigation
  document.addEventListener("astro:page-load", initializeCart);

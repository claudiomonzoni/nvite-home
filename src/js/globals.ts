import {
    dispatchCartUpdateEvent,
    getCartCookie,
    saveCartCookie,
  } from "./utils";
  
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
    
        el.textContent = cartItems.filter((id: string) => id === productId).length;
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
      newCartItems.push(productId);
    }

    if (actionType === "decrement") {
      if (newCartItems.includes(productId)) {
        newCartItems.splice(newCartItems.indexOf(productId), 1);
      }
    }

    saveCartCookie(newCartItems);
    dispatchCartUpdateEvent();
  }

  // Initialize on first load
  initializeCart();

  // Re-initialize after navigation
  document.addEventListener("astro:page-load", initializeCart);
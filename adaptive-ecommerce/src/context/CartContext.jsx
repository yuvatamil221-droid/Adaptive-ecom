import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // --------------------------------
  // CART TOTAL
  // --------------------------------

  const cartTotal = cart.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;

    return total + price * quantity;
  }, 0);

  // --------------------------------
  // ADD TO CART
  // --------------------------------

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // --------------------------------
  // REMOVE FROM CART
  // --------------------------------

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  // --------------------------------
  // INCREASE QUANTITY
  // --------------------------------

  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // --------------------------------
  // DECREASE QUANTITY
  // --------------------------------

  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // --------------------------------
  // PLACE ORDER
  // --------------------------------

  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: `ORD${Date.now()}`,

      items: [...cart],

      total: orderDetails.total,

      paymentMethod: orderDetails.paymentMethod,

      delivery: orderDetails.delivery,

      address: orderDetails.address,

      couponCode: orderDetails.couponCode || null,

      couponDiscount: orderDetails.couponDiscount || 0,

      status: "Placed",

      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setOrders((currentOrders) => [
      newOrder,
      ...currentOrders,
    ]);

    // Clear cart after successful order
    setCart([]);

    return newOrder;
  };

  // --------------------------------
  // CONTEXT
  // --------------------------------

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        orders,

        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,

        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
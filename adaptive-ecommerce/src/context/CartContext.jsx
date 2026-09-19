import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);


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


  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );
  };


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


  const placeOrder = (orderDetails) => {

    if (cart.length === 0) {
      return null;
    }


    const newOrder = {
      id: "ORD" + Date.now(),

      products: cart,

      total: orderDetails.total,

      status: "Processing",

      date: new Date().toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),

      paymentMethod:
        orderDetails.paymentMethod,

      delivery:
        orderDetails.delivery,

      address:
        orderDetails.address,
    };


    setOrders((currentOrders) => [
      newOrder,
      ...currentOrders,
    ]);


    setCart([]);


    return newOrder;
  };


  const clearCart = () => {
    setCart([]);
  };


  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (
    <CartContext.Provider
      value={{
        cart,
        orders,

        cartCount,
        cartTotal,

        addToCart,
        removeFromCart,

        increaseQuantity,
        decreaseQuantity,

        placeOrder,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
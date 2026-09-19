import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

import CheckoutAddress from "./checkoutAddress";
import CheckoutDelivery from "./checkoutDelivery";
import CheckoutPayment from "./checkoutPayment";
import CheckoutReview from "./checkoutReview";
import CheckoutSummary from "./checkoutSummary";
import CheckoutSuccess from "./checkoutSuccess";
import CheckoutEmpty from "./checkoutEmpty";

function Checkout({ navigate }) {
  const { cart, orders, placeOrder } = useContext(CartContext);

  const isReturningUser = orders.length > 0;
  const lastOrder = orders[0];

  const [address, setAddress] = useState(
    isReturningUser && lastOrder.address
      ? lastOrder.address
      : {
          name: "",
          phone: "",
          address: "",
          city: "",
          pincode: "",
        },
  );

  const [delivery, setDelivery] = useState("Standard Delivery");

  const [paymentMethod, setPaymentMethod] = useState("");

  const [upiId, setUpiId] = useState("");

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const [placedOrder, setPlacedOrder] = useState(null);

  /* PRODUCT TOTAL */

  const productTotal = cart.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;

    return total + price * quantity;
  }, 0);

  /* DELIVERY */

  const shipping =
    delivery === "Express Delivery" ? 99 : productTotal >= 999 ? 0 : 49;

  /* FINAL TOTAL */

  const finalTotal = productTotal + shipping;

  console.log("CART:", cart);
  console.log("PRODUCT TOTAL:", productTotal);
  console.log("SHIPPING:", shipping);
  console.log("FINAL TOTAL:", finalTotal);

  /* ADDRESS CHANGE */

  const handleAddressChange = (event) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value,
    });
  };

  /* CARD CHANGE */

  const handleCardChange = (event) => {
    setCard({
      ...card,
      [event.target.name]: event.target.value,
    });
  };

  /* PLACE ORDER */

  const handlePlaceOrder = () => {
    if (!address.name || !address.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    if (!address.address || !address.city || !address.pincode) {
      alert("Please enter your complete address.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (paymentMethod === "UPI" && !upiId) {
      alert("Please enter your UPI ID.");
      return;
    }

    if (
      paymentMethod === "Card" &&
      (!card.number || !card.expiry || !card.cvv)
    ) {
      alert("Please enter complete card details.");
      return;
    }

    const order = placeOrder({
      total: finalTotal,
      paymentMethod: paymentMethod,
      delivery: delivery,
      address: address,
    });

    if (order) {
      setPlacedOrder(order);
    }
  };

  /* EMPTY CART */

  /* EMPTY CART */

  if (cart.length === 0 && !placedOrder) {
    return <CheckoutEmpty navigate={navigate} />;
  }

  /* SUCCESS */

  if (placedOrder) {
    return (
      <CheckoutSuccess
        address={placedOrder.address}
        paymentMethod={placedOrder.paymentMethod}
        delivery={placedOrder.delivery}
        finalTotal={placedOrder.total}
        navigate={navigate}
      />
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* HEADER */}

      <div className="mb-8">
        <button
          onClick={() => navigate("cart")}
          className="mb-5 text-sm font-bold text-gray-500 hover:text-gray-900"
        >
          ← Back to Cart
        </button>

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          Checkout
        </p>

        <h1 className="mt-2 text-3xl font-black">
          {isReturningUser ? "Quick Checkout" : "Complete Your Order"}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {isReturningUser
            ? "Confirm your details and complete your purchase."
            : "Enter your details and complete your purchase."}
        </p>
      </div>

      {/* CHECKOUT */}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
        {/* LEFT */}

        <div className="space-y-6">
          <CheckoutAddress
            address={address}
            handleAddressChange={handleAddressChange}
            isReturningUser={isReturningUser}
          />

          {!isReturningUser && (
            <CheckoutDelivery
              delivery={delivery}
              setDelivery={setDelivery}
              productTotal={productTotal}
            />
          )}

          <CheckoutPayment
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            upiId={upiId}
            setUpiId={setUpiId}
            card={card}
            handleCardChange={handleCardChange}
            isReturningUser={isReturningUser}
          />

          {!isReturningUser && (
            <CheckoutReview
              cart={cart}
              address={address}
              delivery={delivery}
              paymentMethod={paymentMethod}
            />
          )}
        </div>

        {/* RIGHT */}

        <CheckoutSummary
          cart={cart}
          productTotal={productTotal}
          shipping={shipping}
          finalTotal={finalTotal}
          paymentMethod={paymentMethod}
          handlePlaceOrder={handlePlaceOrder}
        />
      </div>
    </div>
  );
}

export default Checkout;

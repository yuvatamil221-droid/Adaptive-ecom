import { useContext, useState } from "react";

import Footer from "../components/footer";

import CheckoutAddress from "../components/checkoutAddress";
import CheckoutDelivery from "../components/checkoutDelivery";
import CheckoutPayment from "../components/checkoutPayment";
import CheckoutReview from "../components/checkoutReview";
import CheckoutSummary from "../components/checkoutSummary";
import CheckoutSuccess from "../components/checkoutSuccess";
import CheckoutEmpty from "../components/checkoutEmpty";

import { CartContext } from "../context/CartContext";

function Checkout({ navigate }) {
  const {
  cart,
  placeOrder,
} = useContext(CartContext);

const cartTotal = cart.reduce((total, item) => {
  const price = Number(item.price) || 0;
  const quantity = Number(item.quantity) || 1;

  return total + price * quantity;
}, 0);

  // --------------------------------
  // ADDRESS
  // --------------------------------

  const [address, setAddress] = useState("");

  // --------------------------------
  // DELIVERY
  // --------------------------------

  const [delivery, setDelivery] =
    useState("Standard Delivery");

  // --------------------------------
  // PAYMENT
  // --------------------------------

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  const [upiId, setUpiId] = useState("");

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  // --------------------------------
  // COUPON
  // --------------------------------

  const [showCoupons, setShowCoupons] =
    useState(false);

  const [appliedCoupon, setAppliedCoupon] =
    useState(null);

  // --------------------------------
  // ORDER
  // --------------------------------

  const [placedOrder, setPlacedOrder] =
    useState(null);

  // --------------------------------
  // COUPONS
  // --------------------------------

  const coupons = [
    {
      code: "SAVE100",
      title: "₹100 OFF",
      description:
        "Get ₹100 off on orders above ₹999",
      minAmount: 999,
      discount: 100,
    },

    {
      code: "SAVE200",
      title: "₹200 OFF",
      description:
        "Get ₹200 off on orders above ₹1,499",
      minAmount: 1499,
      discount: 200,
    },

    {
      code: "SAVE500",
      title: "₹500 OFF",
      description:
        "Get ₹500 off on orders above ₹4,999",
      minAmount: 4999,
      discount: 500,
    },

    {
      code: "WELCOME10",
      title: "₹150 OFF",
      description:
        "Get ₹150 off on orders above ₹1,999",
      minAmount: 1999,
      discount: 150,
    },
  ];

  // --------------------------------
  // DELIVERY CHARGE
  // --------------------------------

  let deliveryCharge = 0;

  if (delivery === "Standard Delivery") {
    deliveryCharge =
      cartTotal >= 999 ? 0 : 49;
  }

  if (delivery === "Express Delivery") {
    deliveryCharge = 99;
  }

  // --------------------------------
  // COUPON DISCOUNT
  // --------------------------------

  let couponDiscount = 0;

  if (appliedCoupon) {
    couponDiscount = appliedCoupon.discount;
  }

  // --------------------------------
  // FINAL TOTAL
  // --------------------------------

  const finalTotal =
    cartTotal +
    deliveryCharge -
    couponDiscount;

  // --------------------------------
  // ADDRESS CHANGE
  // --------------------------------

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const addAddress = (newAddress) => {
    setAddress(newAddress);
  };

  // --------------------------------
  // CARD CHANGE
  // --------------------------------

  const handleCardChange = (event) => {
    setCard({
      ...card,
      [event.target.name]: event.target.value,
    });
  };

  // --------------------------------
  // APPLY COUPON
  // --------------------------------

  const handleApplyCoupon = (coupon) => {
    if (cartTotal >= coupon.minAmount) {
      setAppliedCoupon(coupon);
      setShowCoupons(false);
    }
  };

  // --------------------------------
  // REMOVE COUPON
  // --------------------------------

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
  };

  // --------------------------------
  // PLACE ORDER
  // --------------------------------

  const handlePlaceOrder = () => {
    if (!address) {
      alert("Please enter your delivery address.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (
      paymentMethod === "UPI" &&
      !upiId
    ) {
      alert("Please enter your UPI ID.");
      return;
    }

    if (
      paymentMethod === "Card" &&
      (!card.number ||
        !card.expiry ||
        !card.cvv)
    ) {
      alert("Please enter complete card details.");
      return;
    }

    const order = placeOrder({
      total: finalTotal,
      paymentMethod: paymentMethod,
      delivery: delivery,
      address: address,
      couponCode: appliedCoupon
        ? appliedCoupon.code
        : null,
      couponDiscount: couponDiscount,
    });

    if (order) {
      setPlacedOrder({
        ...order,
        couponCode: appliedCoupon
          ? appliedCoupon.code
          : null,
        couponDiscount: couponDiscount,
      });
    }
  };

  // --------------------------------
  // SUCCESS PAGE
  // --------------------------------

  if (placedOrder) {
  return (
    <CheckoutSuccess
      navigate={navigate}
      order={placedOrder}
    />
  );
}
  // --------------------------------
  // EMPTY CART
  // --------------------------------

  if (cart.length === 0) {
  return <CheckoutEmpty navigate={navigate} />;
}

  // --------------------------------
  // CHECKOUT PAGE
  // --------------------------------

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">

        {/* BACK BUTTON */}

        <button
          onClick={() => navigate("cart")}
          className="mb-6 text-sm font-bold text-gray-600 hover:text-gray-900"
        >
          ← Back to Cart
        </button>

        {/* TITLE */}

        <div className="mb-8">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
            Secure Checkout
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Complete your order by providing
            delivery and payment details.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

          {/* LEFT SIDE */}

          <div className="space-y-6">

            {/* ADDRESS */}

            <CheckoutAddress
              address={address}
              handleAddressChange={
                handleAddressChange
              }
              addAddress={addAddress}
            />

            {/* DELIVERY */}

            <CheckoutDelivery
              delivery={delivery}
              setDelivery={setDelivery}
              productTotal={cartTotal}
            />

            {/* PRODUCTS */}

            

            {/* COUPON */}

            <section className="bg-white p-5 shadow-sm sm:p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Offers
                  </p>

                  <h2 className="mt-1 text-xl font-black">
                    Coupon
                  </h2>

                </div>

                {!appliedCoupon && (
                  <button
                    onClick={() =>
                      setShowCoupons(
                        !showCoupons
                      )
                    }
                    className="text-sm font-black text-red-500 hover:text-red-600"
                  >
                    {showCoupons
                      ? "Hide Coupons"
                      : "View Available Coupons"}
                  </button>
                )}

              </div>

              {/* APPLIED COUPON */}

              {appliedCoupon && (

                <div className="mt-5 flex items-center justify-between border border-green-200 bg-green-50 p-4">

                  <div>

                    <p className="text-sm font-black text-green-700">
                      {appliedCoupon.code}
                    </p>

                    <p className="mt-1 text-xs text-green-600">
                      You saved ₹
                      {appliedCoupon.discount.toLocaleString(
                        "en-IN"
                      )}
                    </p>

                  </div>

                  <button
                    onClick={
                      handleRemoveCoupon
                    }
                    className="text-xs font-black text-red-500"
                  >
                    Remove
                  </button>

                </div>

              )}

              {/* COUPON LIST */}

              {showCoupons &&
                !appliedCoupon && (

                  <div className="mt-5 space-y-3">

                    {coupons.map(
                      (coupon) => {

                        const applicable =
                          cartTotal >=
                          coupon.minAmount;

                        return (

                          <div
                            key={coupon.code}
                            className={`border p-4 ${
                              applicable
                                ? "border-gray-200 bg-white"
                                : "border-gray-100 bg-gray-50 opacity-50"
                            }`}
                          >

                            <div className="flex items-start justify-between gap-4">

                              <div>

                                <p className="text-sm font-black">
                                  {coupon.code}
                                </p>

                                <p className="mt-1 text-sm font-bold">
                                  {coupon.title}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                  {
                                    coupon.description
                                  }
                                </p>

                                <p className="mt-2 text-[11px] font-bold text-gray-400">
                                  Minimum order:
                                  ₹
                                  {coupon.minAmount.toLocaleString(
                                    "en-IN"
                                  )}
                                </p>

                              </div>

                              {applicable ? (

                                <button
                                  onClick={() =>
                                    handleApplyCoupon(
                                      coupon
                                    )
                                  }
                                  className="shrink-0 bg-black px-4 py-2 text-xs font-black text-white"
                                >
                                  APPLY
                                </button>

                              ) : (

                                <span className="shrink-0 text-xs font-bold text-gray-400">
                                  NOT AVAILABLE
                                </span>

                              )}

                            </div>

                          </div>

                        );
                      }
                    )}

                  </div>

                )}

            </section>

            {/* PAYMENT */}

            <CheckoutPayment
              paymentMethod={
                paymentMethod
              }
              setPaymentMethod={
                setPaymentMethod
              }
              upiId={upiId}
              setUpiId={setUpiId}
              card={card}
              handleCardChange={
                handleCardChange
              }
            />

            {/* REVIEW */}


          </div>

          {/* RIGHT SIDE */}

          <div className="lg:sticky lg:top-5 lg:self-start">

            <CheckoutSummary
              products={cart}
              subtotal={cartTotal}
              delivery={delivery}
              deliveryCharge={
                deliveryCharge
              }
              couponDiscount={
                couponDiscount
              }
              appliedCoupon={
                appliedCoupon
              }
              finalTotal={finalTotal}
              paymentMethod={
                paymentMethod
              }
              onPlaceOrder={
                handlePlaceOrder
              }
            />

          </div>

        </div>

      </main>

     

    </div>
  );
}

export default Checkout;
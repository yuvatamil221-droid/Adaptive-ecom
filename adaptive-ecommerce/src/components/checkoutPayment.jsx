function CheckoutPayment({
  paymentMethod,
  setPaymentMethod,
  upiId,
  setUpiId,
  card,
  handleCardChange,
  isReturningUser,
}) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center gap-3">

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
          {isReturningUser ? "2" : "3"}
        </span>

        <div>
          <h2 className="text-xl font-black">
            Payment Method
          </h2>

          <p className="text-sm text-gray-500">
            Select your preferred payment method.
          </p>
        </div>

      </div>


      <div className="mt-6 space-y-3">

        {/* UPI */}

        <label className="block cursor-pointer rounded-2xl border border-gray-200 p-4 hover:bg-gray-50">

          <div className="flex items-center gap-3">

            <input
              type="radio"
              name="payment"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(event) =>
                setPaymentMethod(event.target.value)
              }
            />

            <div>
              <p className="font-bold">
                UPI
              </p>

              <p className="text-xs text-gray-500">
                Pay using your UPI ID
              </p>
            </div>

          </div>


          {paymentMethod === "UPI" && (
            <div className="mt-4">

              <input
                type="text"
                value={upiId}
                onChange={(event) =>
                  setUpiId(event.target.value)
                }
                placeholder="Enter UPI ID"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
              />

              <p className="mt-2 text-xs text-gray-400">
                Enter your UPI ID to continue.
              </p>

            </div>
          )}

        </label>


        {/* CARD */}

        <label className="block cursor-pointer rounded-2xl border border-gray-200 p-4 hover:bg-gray-50">

          <div className="flex items-center gap-3">

            <input
              type="radio"
              name="payment"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={(event) =>
                setPaymentMethod(event.target.value)
              }
            />

            <div>
              <p className="font-bold">
                Credit / Debit Card
              </p>

              <p className="text-xs text-gray-500">
                Pay using your card
              </p>
            </div>

          </div>


          {paymentMethod === "Card" && (
            <div className="mt-4 space-y-3">

              <input
                type="text"
                name="number"
                value={card.number}
                onChange={handleCardChange}
                placeholder="Card Number"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
              />


              <div className="grid grid-cols-2 gap-3">

                <input
                  type="text"
                  name="expiry"
                  value={card.expiry}
                  onChange={handleCardChange}
                  placeholder="MM / YY"
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
                />

                <input
                  type="password"
                  name="cvv"
                  value={card.cvv}
                  onChange={handleCardChange}
                  placeholder="CVV"
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
                />

              </div>

            </div>
          )}

        </label>


        {/* CASH ON DELIVERY */}

        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-200 p-4 hover:bg-gray-50">

          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            checked={paymentMethod === "Cash on Delivery"}
            onChange={(event) =>
              setPaymentMethod(event.target.value)
            }
          />

          <div>
            <p className="font-bold">
              Cash on Delivery
            </p>

            <p className="text-xs text-gray-500">
              Pay when your order arrives
            </p>
          </div>

        </label>

      </div>

    </section>
  );
}

export default CheckoutPayment;
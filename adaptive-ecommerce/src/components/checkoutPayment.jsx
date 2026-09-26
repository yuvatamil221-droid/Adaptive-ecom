function CheckoutPayment({
  paymentMethod,
  setPaymentMethod,
}) {
  const payments = [
    "Cash on Delivery",
    "UPI",
    "Credit / Debit Card",
  ];

  return (
    <section className="mt-5 bg-white p-5 shadow-sm sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
        3
      </p>

      <h2 className="mt-1 text-xl font-black">
        Payment Method
      </h2>

      <div className="mt-5 space-y-3">
        {payments.map((payment) => (
          <label
            key={payment}
            className="flex cursor-pointer items-center gap-3 border border-gray-200 p-4"
          >
            <input
              type="radio"
              name="payment"
              value={payment}
              checked={paymentMethod === payment}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            <span className="text-sm font-bold">
              {payment}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}

export default CheckoutPayment;
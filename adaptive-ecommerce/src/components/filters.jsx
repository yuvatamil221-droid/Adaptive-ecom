import { useState } from "react";

function Filters({ onApply }) {
  const [open, setOpen] = useState(false);

  const [filters, setFilters] = useState({
    price: "all",
    brand: "all",
    rating: "all",
    category: "all",
    discount: "all",
    availability: "all",
  });

  const handleChange = (name, value) => {
    setFilters((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleApply = () => {
    if (onApply) {
      onApply(filters);
    }

    setOpen(false);
  };

  const handleClear = () => {
    const clearedFilters = {
      price: "all",
      brand: "all",
      rating: "all",
      category: "all",
      discount: "all",
      availability: "all",
    };

    setFilters(clearedFilters);

    if (onApply) {
      onApply(clearedFilters);
    }
  };

  return (
    <aside className="mb-6">

      {/* Mobile Filter Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold shadow-sm lg:hidden"
      >
        <span>☷ Filters</span>
        <span>{open ? "−" : "+"}</span>
      </button>


      {/* Filters Container */}
      <div
        className={`mt-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm ${
          open ? "block" : "hidden"
        } lg:block`}
      >

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">

          <div>
            <h3 className="font-black">
              Filters
            </h3>

            <p className="mt-1 text-xs text-gray-400">
              Refine your results
            </p>
          </div>

          <button
            onClick={handleClear}
            className="text-xs font-bold text-red-500 hover:text-red-600"
          >
            Clear all
          </button>

        </div>


        {/* Price */}
        <FilterSelect
          label="Price"
          value={filters.price}
          onChange={(value) => handleChange("price", value)}
          options={[
            ["all", "All prices"],
            ["under1000", "Under ₹1,000"],
            ["1000-5000", "₹1,000 - ₹5,000"],
            ["5000-10000", "₹5,000 - ₹10,000"],
            ["above10000", "Above ₹10,000"],
          ]}
        />


        {/* Brand */}
        <FilterSelect
          label="Brand"
          value={filters.brand}
          onChange={(value) => handleChange("brand", value)}
          options={[
            ["all", "All brands"],
            ["JBL", "JBL"],
            ["boAt", "boAt"],
            ["Apple", "Apple"],
            ["Logitech", "Logitech"],
            ["Samsung", "Samsung"],
          ]}
        />


        {/* Rating */}
        <FilterSelect
          label="Rating"
          value={filters.rating}
          onChange={(value) => handleChange("rating", value)}
          options={[
            ["all", "All ratings"],
            ["4", "4★ & above"],
            ["4.5", "4.5★ & above"],
          ]}
        />


        {/* Category */}
        <FilterSelect
          label="Category"
          value={filters.category}
          onChange={(value) => handleChange("category", value)}
          options={[
            ["all", "All categories"],
            ["electronics", "Electronics"],
            ["fashion", "Fashion"],
            ["beauty", "Beauty"],
            ["home", "Home"],
          ]}
        />


        {/* Discount */}
        <FilterSelect
          label="Discount"
          value={filters.discount}
          onChange={(value) => handleChange("discount", value)}
          options={[
            ["all", "Any discount"],
            ["10", "10% & above"],
            ["20", "20% & above"],
            ["30", "30% & above"],
            ["40", "40% & above"],
          ]}
        />


        {/* Availability */}
        <FilterSelect
          label="Availability"
          value={filters.availability}
          onChange={(value) => handleChange("availability", value)}
          options={[
            ["all", "All"],
            ["inStock", "In Stock"],
            ["outOfStock", "Out of Stock"],
          ]}
        />


        {/* Apply */}
        <button
          onClick={handleApply}
          className="mt-5 w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
        >
          Apply Filters
        </button>

      </div>

    </aside>
  );
}


function FilterSelect({ label, value, onChange, options }) {
  return (
    <div className="border-b border-gray-100 py-4 last:border-b-0">

      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-gray-400 focus:bg-white"
      >
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>

    </div>
  );
}

export default Filters;
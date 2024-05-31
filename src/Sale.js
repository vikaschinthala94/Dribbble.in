import React, { useState } from 'react';

// CSS classes
const labelClass = "block text-sm font-medium text-gray-700";
const inputClass = "block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md";
const buttonClass = "absolute inset-y-0 right-0 px-2 flex items-center focus:outline-none";
const listItemClass = "cursor-default select-none relative py-2 pl-3 pr-9 text-gray-900";

// Component for Product Selection Dropdown
const ProductSelect = ({ onProductChange }) => {
  return (
    <div className="p-4">
      <label htmlFor="product-select" className={labelClass}>
        All Products <span className="text-red-500">*</span>
      </label>
      <div className="relative mt-1">
        <select
          id="product-select"
          className={inputClass}
          onChange={(event) => onProductChange(event.target.value)}
        >
          <option value="" disabled>Select a product</option>
          <option value="Product 5">Product 5</option>
          <option value="Stocked Product I">Stocked Product I</option>
          <option value="Benoit Saint Denis">Benoit Saint Denis</option>
          <option value="Anonymous Product">Anonymous Product</option>
          <option value="Stocked Tea I">Stocked Tea I</option>
          <option value="Stocked Tea II">Stocked Tea II</option>
        </select>
        <button className={buttonClass}>
          <svg
            className="h-5 w-5 text-zinc-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Component for Displaying Individual Product Details
const ProductDetails = ({ sku, rate, remaining }) => {
  return (
    <div className="border border-zinc-300 rounded-md p-4 mb-4  text-white">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{sku}</span>
        <span className="text-zinc-500">Rate: ₹ {rate}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={`selling-rate-${sku}`} className={labelClass}>
            Selling Rate
            
          </label>
          <input
            id={`selling-rate-${sku}`}
            type="text"
            className={inputClass}
            placeholder="Enter selling rate"
          />
        </div>
        <div>
          <label htmlFor={`quantity-${sku}`} className={labelClass}>
            Total Items
          </label>
          <input
            id={`quantity-${sku}`}
            type="text"
            className={inputClass}
            placeholder="Enter Quantity"
          />
        </div>
      </div>
      <div className="mt-2 text-green-600 text-sm">{remaining} Item(s) Remaining</div>
    </div>
  );
};

// Component for Displaying Maximum Price Details
const Maxprice = ({ sku, rate, remaining, selectedProduct }) => {
  return (
    <div className="border border-zinc-300 rounded-md p-4 mb-4 bg-black text-white">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{sku}</span>
        <span className="text-zinc-500">Rate: ₹ {rate}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={`amount-${sku}`} className={labelClass}>
            Amount
          </label>
          <input
            id={`amount-${sku}`}
            type="text"
            className={inputClass}
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label htmlFor={`quantity-${sku}`} className={labelClass}>
            Quantity
          </label>
          <input
            id={`quantity-${sku}`}
            type="text"
            className={inputClass}
            placeholder="Enter quantity"
          />
        </div>
        <div>
          <label htmlFor={`product-${sku}`} className={labelClass}>
            Product
          </label>
          <input
            id={`product-${sku}`}
            type="text"
            className={inputClass}
            value={selectedProduct}
            readOnly
          />
        </div>
      </div>
      <div className="mt-2 text-green-600 text-sm">{remaining} Item(s) Remaining</div>
    </div>
  );
};

// Main Component that Renders Product Selection and Details
const ProductComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <>
      <ProductSelect onProductChange={setSelectedProduct} />
      <div className="p-4 bg-black text-white">
        <ProductDetails sku={selectedProduct} rate="324" remaining="104" />
        <Maxprice sku={selectedProduct} rate="280" remaining="72" selectedProduct={selectedProduct} />
      </div>
    </>
  );
};

export default ProductComponent;

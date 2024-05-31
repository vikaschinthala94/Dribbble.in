import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const SaleOrder = ({ id, customerName, price, lastModified }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>
        <img src="https://placehold.co/20x20" alt="profile" />
        {customerName}
        <span>ap2000</span>
      </td>
      <td>₹ {price}</td>
      <td>{lastModified}</td>
      <td>...</td>
    </tr>
  );
};

function Productform() {
  const navigate = useNavigate();

  const handleSaleOrderClick = () => {
    navigate("/Sale");
  };

  return (
    <div className="App">
      <div className="button-group">
        <button>Active Sale Orders</button>
        <button>Completed Sale Orders</button>
        <button className="pull-right" onClick={handleSaleOrderClick}>
          + Sale Order
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Price (₹)</th>
              <th>Last Modified</th>
              <th>Edit/View</th>
            </tr>
          </thead>
          <tbody>
            <SaleOrder
              id="1"
              customerName="Spider"
              price="100"
              lastModified="24/5/2024 (11:07 PM)"
            />
            <SaleOrder
              id="2"
              customerName="Spider"
              price="210"
              lastModified="24/5/2024 (11:30 PM)"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Productform;

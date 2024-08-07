import React, { useRef, useState } from 'react';
import { CardComponent, CardNumber, CardExpiry, CardCVV } from "@chargebee/chargebee-js-react-wrapper";
import { useSelector } from "react-redux";
import axios from 'axios';

const ChargebeeWidgets = ({ onSuccess, onError, userData }) => {
  const plan = useSelector((state) => state.plan);
  const cardRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    firstName: userData.fname || '',
    lastName: userData.lname || '',
    phone: userData.telNo || '',
    email: userData.email || ''
  });

  const createPaymentIntent = async () => {
    try {
     
      const body = {
        id: plan.plan.id,
        firstName: billingDetails.firstName,
        lastName: billingDetails.lastName,
        email: billingDetails.email
      }
       
      const response = await axios.post("http://localhost:8000/api/chargebee/create_payment_intent", body);

      if (response.status !== 200) {
        throw new Error('Failed to create payment intent');
      }

      return response.data;
    } catch (error) {
      console.error("Error creating payment intent:", error);
      throw error;
    }
  };

  const handlePayment = async () => {
    setLoading(true);

    try {
      const intent = await createPaymentIntent();
      window.location.href = intent.url;
      setLoading(false);
      onSuccess(result);
    } catch (error) {
      setLoading(false);
      onError(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value
    });
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-md" style={{ width: "100%" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={billingDetails.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500"
          />
        </div>
        {/* <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={billingDetails.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500"
          />
        </div>
        <div className="space-y-2 col-span-2">
          <label className="block text-sm font-bold text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={billingDetails.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500"
          />
        </div> */}
        <div className="space-y-2 col-span-2">
          <label className="block text-sm font-bold text-gray-700">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={billingDetails.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500"
          />
        </div>
      </div>
      {/* <CardComponent ref={cardRef} className="mt-5">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Card Number</label>
            <CardNumber className="w-full p-2 border border-gray-300 rounded focus:border-blue-500" />
          </div>
          <div className="flex space-x-4">
            <div className="space-y-2 flex-1">
              <label className="block text-sm font-bold text-gray-700">Expiry</label>
              <CardExpiry className="w-full p-2 border border-gray-300 rounded focus:border-blue-500" />
            </div>
            <div className="space-y-2 flex-1">
              <label className="block text-sm font-bold text-gray-700">CVC</label>
              <CardCVV className="w-full p-2 border border-gray-300 rounded focus:border-blue-500" />
            </div>
          </div>
        </div>
      </CardComponent> */}
      <button
        type="button"
        className={`mt-5 w-full p-2 text-white font-bold rounded ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default ChargebeeWidgets;

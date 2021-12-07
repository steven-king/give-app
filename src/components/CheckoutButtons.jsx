import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export const CheckoutButtons = ({ amount }) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (orderData) {
      window.location.href = "/connect";
    });
  };

  return (
    <PayPalButton
      disabled={true}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}

CheckoutButtons.propTypes = {
  amount: PropTypes.string.isRequired,
};
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PropTypes from "prop-types";

export const CheckoutButtons = ({ amount }) => {
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_CLIENT_ID, "disable-funding": "paylater" }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        disabled={false}
        forceReRender={[amount]}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (orderData) {
            // Your code here after capture the order
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );
            var transaction = orderData.purchase_units[0].payments.captures[0];
            alert(
              "Transaction " +
              transaction.status +
              ": " +
              transaction.id +
              "\n\nSee console for all available details"
            );
            actions.redirect('/connect');
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

CheckoutButtons.propTypes = {
  amount: PropTypes.string.isRequired,
};

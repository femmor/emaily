import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <>
        <StripeCheckout
          name="Emaily"
          image="https://www.flaticon.com/svg/vstatic/svg/4221/4221053.svg?token=exp=1614814929~hmac=0d3518c70cbd9cd71a3d3db4ebf8c840"
          label="Add Credits"
          email="info@emaily.co"
          panelLabel="Add 5 Credits for "
          amount={500}
          token={token => console.log(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        />
      </>
    );
  }
}

export default Payments;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_MO6vVhZCvQ0hTypkArBPy8Qa00NG8RVZ4q';

    const onToken = token => {
        console.log(token);
        alert('Payment successfull!');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Cool Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;

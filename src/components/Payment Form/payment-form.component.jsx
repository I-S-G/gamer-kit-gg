import { CardElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/button.component';
import { PaymentFormContainer, FormContainer } from './payment-form.styles';

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) return;

        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 10000}),
        }).then(res => res.json());

        const { 
            paymentIntent: { client_secret }
        } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "Ma Long"
                }
            }
        });

        if (paymentResult.error) alert(paymentResult.error);
        if (paymentResult.paymentIntent.status === 'succeeded') alert("payment successful");

    }

    

    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={handleSubmit}>
                <h2> Pay with credit card:</h2>
                <CardElement />
                <Button buttonType = {BUTTON_TYPE_CLASSES.inverted}> Pay now </Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card == null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card
        })
        if(error){
            console.log(error);
        }
        if(paymentMethod){
            console.log(paymentMethod)
        }

    }
    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col justify-center">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                >

                </CardElement>
                <button type="submit" className="btn w-1/4 mt-5 mx-auto btn-sm  btn-success" disabled={!stripe}>Pay</button>
            </form>
        </div>
    );
};

export default CheckoutForm;
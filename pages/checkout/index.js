import {useContext} from "react"
import Checkout from "../../comps/Checkout/Checkout";
import CheckoutForm from "../../comps/Checkout/CheckoutForm";
import MarilynContext from "../../contexts/MarilynContext"
//pk_test_51HuJSUJ8kbMcemu1kvdfTKfQ31sOi4E2AQ1S8fNjYLQ5tOdfWiQWazCr7LgiR19RemeWHaDTmdBXdEuRBSQ3IoX700lk1ZWiEG

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HuJSUJ8kbMcemu1kvdfTKfQ31sOi4E2AQ1S8fNjYLQ5tOdfWiQWazCr7LgiR19RemeWHaDTmdBXdEuRBSQ3IoX700lk1ZWiEG');


function index() {
  const { cart } = useContext(MarilynContext)
  console.log(cart)
  return (
    <div>
      <h1>Checkout</h1>
      <h1>Checkout</h1>
      {cart.map(cartItem => (
        <h1 key={cartItem.id}>{cartItem.Name}</h1>
      ))}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default index

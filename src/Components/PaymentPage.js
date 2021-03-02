

import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import {
    SquarePaymentForm,
    ApplePayButton,
    CreditCardCVVInput,
    CreditCardExpirationDateInput,
    CreditCardNumberInput,
    CreditCardPostalCodeInput,
    CreditCardSubmitButton,
    GooglePayButton,
    MasterpassButton,
  } from 'react-square-payment-form';
  import 'react-square-payment-form/lib/default.css';
  import '../css/PaymentPage.scss'
  
  const APPLICATION_ID = 'sandbox-sq0idb-zpwIkYe7ALhGiYVqJgT8aA';
  const LOCATION_ID = 'LMGSEFQN3X8R2';
  
  
  const PaymentPage = () => {
    const [errorMessages, setErrorMessages] = useState([]);
  
    function cardNonceResponseReceived(errors, nonce, cardData, buyerVerificationToken) {
      if (errors) {
        setErrorMessages(errors.map(error => error.message));
        return;
      }
  
      setErrorMessages([]);
  
      alert('nonce created: ' + nonce + ', buyerVerificationToken: ' + buyerVerificationToken);
      // MAKE PAYMENT
    }
  
    function createPaymentRequest() {
      return {
        requestShippingAddress: false,
        requestBillingInfo: true,
        currencyCode: 'USD',
        countryCode: 'US',
        total: {
          label: 'MERCHANT NAME',
          amount: '100',
          pending: false,
        },
        lineItems: [
          {
            label: 'Subtotal',
            amount: '100',
            pending: false,
          },
        ],
      };
    }
  
    function createVerificationDetails() {
      return {
        amount: '100.00',
        currencyCode: 'USD',
        intent: 'CHARGE',
        billingContact: {
          familyName: 'Smith',
          givenName: 'John',
          email: 'jsmith@example.com',
          country: 'GB',
          city: 'London',
          addressLines: ["1235 Emperor's Gate"],
          postalCode: 'SW7 4JA',
          phone: '020 7946 0532',
        },
      };
    }
  
    function postalCode() {
      const postalCode = '12345'; // your logic here
      return postalCode;
    }
  
    function focusField() {
      return 'cardNumber';
    }

    return (
      
<div class="payment-container">
  <div class="credit-card">
    <button class="proceed"><svg class="sendicon" width="24" height="24" viewBox="0 0 24 24">
  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
</svg></button>
   <img src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png" class="logo-card" />
 <label>Card number:</label>
 <input id="user" type="text" class="input cardnumber"  placeholder="1234 5678 9101 1121" />
 <label>Name:</label>
 <input class="input name"  placeholder="James Bond" />
 <label class="toleft">CCV:</label>
 <input class="input toleft ccv" placeholder="321" />
  </div>
  <div class="receipt">
    <div class="col"><p>Cost:</p>
    <h2 class="cost">$150</h2><br/>
    <p>Name:</p>
    <h2 class="seller">CBD Inc.</h2>
    </div>
    <div class="col">
      <p>Cart:</p>
      <h3 class="bought-items">Ultimate</h3>
      <p class="bought-items description">Total: 1</p>
      <p class="bought-items price">$100</p><br/>
      <h3 class="bought-items">Premium</h3>
      <p class="bought-items description">Total: 2</p>
      <p class="bought-items price">$50 </p><br/>
    </div>
    <p class="comprobe">This information will be sent to your email</p>
  </div>
</div>

      // <SquarePaymentForm
      //   sandbox={true}
      //   applicationId={APPLICATION_ID}
      //   locationId={LOCATION_ID}
      //   cardNonceResponseReceived={cardNonceResponseReceived}
      //   createPaymentRequest={createPaymentRequest}
      //   createVerificationDetails={createVerificationDetails}
      //   postalCode={postalCode}
      //   focusField={focusField}
      //  >
      //    <div style={{
      //      alignItems: "center",
      //      textAlign: "center",
      //      marginTop: "50%",
      //      }}>
      //   <fieldset className="sq-fieldset">
      //     <CreditCardNumberInput />
  
      //     <div className="sq-form-third">
      //       <CreditCardExpirationDateInput />
      //     </div>
  
      //     <div className="sq-form-third">
      //       <CreditCardPostalCodeInput />
      //     </div>
  
      //     <div className="sq-form-third">
      //       <CreditCardCVVInput />
      //     </div>
      //   </fieldset>
  
      //   <CreditCardSubmitButton>Pay $1.00</CreditCardSubmitButton>

      //   </div>
      // </SquarePaymentForm>
    );
  };
  
  export default PaymentPage;
  
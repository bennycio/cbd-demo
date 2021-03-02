

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
      var response = makePayment(nonce, buyerVerificationToken)
      console.log(response)
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
      <SquarePaymentForm
        sandbox={true}
        applicationId={APPLICATION_ID}
        locationId={LOCATION_ID}
        cardNonceResponseReceived={cardNonceResponseReceived}
        createPaymentRequest={createPaymentRequest}
        createVerificationDetails={createVerificationDetails}
        postalCode={postalCode}
        focusField={focusField}
       >
         <div style={{
           alignItems: "center",
           textAlign: "center",
           marginTop: "50%",
           }}>
        <fieldset className="sq-fieldset">
          <CreditCardNumberInput />
  
          <div className="sq-form-third">
            <CreditCardExpirationDateInput />
          </div>
  
          <div className="sq-form-third">
            <CreditCardPostalCodeInput />
          </div>
  
          <div className="sq-form-third">
            <CreditCardCVVInput />
          </div>
        </fieldset>
  
        <CreditCardSubmitButton>Pay $1.00</CreditCardSubmitButton>

        </div>
      </SquarePaymentForm>
    );
  };

  function makePayment(nonce, token) {
    const data = createPayload(nonce,token)
    const response = fetch("https://connect.squareupsandbox.com/v2/payments", {
      method: 'POST',
      headers: {
        'Authorization': "Bearer EAAAEGvpQJTk_kQgLHr9v7N4GMt53a2yg8ZWAvTvgTDOyDL2HQrGBiL0a73WGq9F",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json(); 
  }
  

    function createPayload(nonce, token){
      const payload = {
      "source_id": nonce,
      "verification_token": token,
      "autocomplete": true,
      "location_id": LOCATION_ID,
      "amount_money": {
        "amount": 100,
        "currency": "USD"
      },
      "idempotency_key": uuidv4()
    }
    return payload
  }
  
  export default PaymentPage;
  
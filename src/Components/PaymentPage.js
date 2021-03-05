

import React, {useState, useContext} from 'react';

import {
    SquarePaymentForm,
    CreditCardCVVInput,
    CreditCardExpirationDateInput,
    CreditCardNumberInput,
    CreditCardPostalCodeInput,
    CreditCardSubmitButton,
  } from 'react-square-payment-form';
  import '../css/PaymentPage.scss';
  import {CartContext} from '../App';
  
  const APPLICATION_ID = 'sandbox-sq0idb-zpwIkYe7ALhGiYVqJgT8aA';
  const LOCATION_ID = 'LMGSEFQN3X8R2';
  
  
  const PaymentPage = () => {

    const {cart, setCart} = useContext(CartContext);

    const [data, setData] = useState({
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com"
    });


  
    function cardNonceResponseReceived(errors, nonce, cardData, buyerVerificationToken) {
      if (errors) {
        console.log(errors)
        return;
      }
  
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
          amount: cart + '00',
          pending: false,
        },
        lineItems: [
          {
            label: 'Subtotal',
            amount:  cart + '00',
            pending: false,
          },
        ],
      };
    }
  
    function createVerificationDetails() {
      return {
        amount: cart + '00',
        currencyCode: 'USD',
        intent: 'CHARGE',
        billingContact: {
          familyName: data.lastName,
          givenName: data.firstName,
          email: data.email,
          country: 'US',
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
  
        <CreditCardSubmitButton>Pay ${cart}</CreditCardSubmitButton>
        </div>
      </SquarePaymentForm>
    );
  };

  export default PaymentPage;


import React from 'react';

import {
    SquarePaymentForm,
    CreditCardCVVInput,
    CreditCardExpirationDateInput,
    CreditCardNumberInput,
    CreditCardPostalCodeInput,
    CreditCardSubmitButton,
  } from 'react-square-payment-form';
  import '../css/PaymentPage.scss';
  
  const APPLICATION_ID = 'sandbox-sq0idb-zpwIkYe7ALhGiYVqJgT8aA';
  const LOCATION_ID = 'LMGSEFQN3X8R2';
  
  
  export default class PaymentPage extends React.Component{

    constructor(props){
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.cardNonceResponseReceived = this.cardNonceResponseReceived.bind(this)
      this.createPaymentRequest = this.createPaymentRequest.bind(this)
      this.createVerificationDetails = this.createVerificationDetails.bind(this)
      this.postalCode = this.postalCode.bind(this)
      this.focusField = this.focusField.bind(this)
      this.state = {
        cart: this.props.cart,
        data: {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com"
        }
      }
    }

    handleChange(value){
      this.setState({
        errorMessages: this.state.errorMessages,
        cart: this.state.cart,
        data: value
      }
      );
    }
  
    cardNonceResponseReceived(errors, nonce, cardData, buyerVerificationToken) {
      if (errors) {
        console.log(errors)
        return;
      }
  
      alert('nonce created: ' + nonce + ', buyerVerificationToken: ' + buyerVerificationToken);
      // MAKE PAYMENT
    }
  
    createPaymentRequest() {
      return {
        requestShippingAddress: false,
        requestBillingInfo: true,
        currencyCode: 'USD',
        countryCode: 'US',
        total: {
          label: 'MERCHANT NAME',
          amount: this.state.cart + '00',
          pending: false,
        },
        lineItems: [
          {
            label: 'Subtotal',
            amount:  this.state.cart + '00',
            pending: false,
          },
        ],
      };
    }
  
    createVerificationDetails() {
      return {
        amount: this.state.cart + '00',
        currencyCode: 'USD',
        intent: 'CHARGE',
        billingContact: {
          familyName: this.state.data.lastName,
          givenName: this.state.data.firstName,
          email: this.state.data.email,
          country: 'US',
          city: 'London',
          addressLines: ["1235 Emperor's Gate"],
          postalCode: 'SW7 4JA',
          phone: '020 7946 0532',
        },
      };
    }
  
    postalCode() {
      const postalCode = '12345'; // your logic here
      return postalCode;
    }
  
    focusField() {
      return 'cardNumber';
    }

    render(){ 
      return (
      <SquarePaymentForm
        sandbox={true}
        applicationId={APPLICATION_ID}
        locationId={LOCATION_ID}
        cardNonceResponseReceived={this.cardNonceResponseReceived}
        createPaymentRequest={this.createPaymentRequest}
        createVerificationDetails={this.createVerificationDetails}
        postalCode={this.postalCode}
        focusField={this.focusField}
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
  
        <CreditCardSubmitButton>Pay ${this.state.cart}</CreditCardSubmitButton>
        </div>
      </SquarePaymentForm>
    );
    }
  };
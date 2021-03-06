import React, {useContext, useState} from 'react';
import '../css/Store.scss'
import {FaInfoCircle, FaShoppingCart, FaRegPlusSquare, FaRegMinusSquare} from 'react-icons/fa'
import {Typography, Divider, Row, Col, Avatar, Drawer, Button, Modal} from 'antd';
import {CartContext} from '../App'
import {
    SquarePaymentForm,
    CreditCardCVVInput,
    CreditCardExpirationDateInput,
    CreditCardNumberInput,
    CreditCardPostalCodeInput,
    CreditCardSubmitButton,
  } from 'react-square-payment-form';

import { v4 as uuidv4 } from 'uuid';

const {Title} = Typography;


const Store = () => {



    const premium = {
        name: "Premium",
        cost: 25,
        description: "Fantastic effects at a budget"
    }
    const ultimate = {
        name: "Ultimate",
        cost: 50,
        description: "Will make you feel what its like to feel"
    }
    const soulWrencher = {
        name: "Soul-Wrencher",
        cost: 100,
        description: "To the moon"
    }


    return (
        <div className="body">
            <div className="container-fluid store-header shadowed">
                <Title className="padding-left small-padding-top-bottom">Products</Title>
            </div>
            <Divider orientation="left" className="divider-lower">Roll Ons</Divider>
            <Cart  />
            <div className="container products-container margin-top-bottom">
                <Row gutter={30}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Product name={premium.name} cost={premium.cost} description={premium.description} />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Product name={ultimate.name} cost={ultimate.cost} description={ultimate.description} />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Product name={soulWrencher.name} cost={soulWrencher.cost} description={soulWrencher.description} />
                    </Col>
                </Row>
            </div>
        </div>
    );
  }


  const Counter = (props) =>{


    const {cart, setCart} = useContext(CartContext);

    const clone = JSON.parse(JSON.stringify(cart));
    var index = clone.findIndex(i => i.name === props.name);
    const count = clone[index].count;

    console.log(props)
    return(
        <div className="add-to-cart">
            <span className="counter solid-icon" onClick={() => {
                if (count > 0){
                    clone[index].count = count - 1;
                    setCart(clone)
                }
            }}><FaRegMinusSquare /></span>
            <span className=" counter solid-icon" onClick={() => {
                clone[index].count = count + 1;
                setCart(clone)
            }}><FaRegPlusSquare /></span>
        </div>
    );
  }



  const Product = (props) => {
    const {cart, setCart} = useContext(CartContext);

    const [added, setAdded] = useState(cart.includes({name: props.name, cost: props.cost}))



    function changeAdded(){
        const clone = JSON.parse(JSON.stringify(cart));
        if (added === false){
            clone.push({name: props.name, cost: props.cost, count: 1});
            setCart(clone);
            setAdded(true)
        }
        else if (added === true){
            var index = clone.findIndex(i => i.name === props.name)
            clone.splice(index, 1);
            setCart(clone);
            setAdded(false);
        }
        document.getElementById(props.name).innerHTML = added ? "Added to Cart" : "Add to Cart";
    }

    return (
    <div>
        <div class="product-wrapper shadowed">
            <div class="product-container">
            <div class="top"></div>
            <div class="bottom">
                <div class="details">
                    <h5>{props.name}</h5>
                    <h5>${props.cost}</h5>
                </div>
            </div>
            </div>
            <div class="inside">
            <div class="icon"><i class="material-icons"><FaInfoCircle /></i></div>
            <div class="contents">
                <h5 className="centered">INFO ON PRODUCT</h5>
            </div>
            </div>
        </div>
        <div className="centered"> 
            <button class="learn-more centered" onClick={changeAdded}>
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span id={props.name} class="button-text" >{added ? "Added to Cart" : "Add to Cart"}</span>
            </button>
        </div>
    </div>
    );
  }

  const Cart = (props) => {
    const {cart, setCart} = useContext(CartContext);

    const [visible, setVisible] = useState(false);

    function openDrawer(){
        setVisible(true);
    }

    function closeDrawer(){
        setVisible(false);
    }

    const cartItems = []
    cart.forEach(function(item){
        cartItems.push(
            <div key={item.name}>
                <p>{item.name}</p>
                <p>Cost: ${item.cost}</p>
                <p>Count: {item.count}</p>
                <Counter name={item.name}/>
                <Divider />
            </div>
        );
    });

    return (
    <div>
        <button className="circle-border margin-left" onClick={openDrawer}><Avatar size="large" icon={<FaShoppingCart />} className="solid-icon"/></button>
    <Drawer
    width={480}
    title="Cart"
    placement="left"
    closable={true}
    onClose={closeDrawer}
    visible={visible}
    >
        {cartItems}
        <Checkout />
    </Drawer>
    </div>
    );
  }

  const Checkout = () => {

    const {cart, setCart} = useContext(CartContext);

    const [data, setData] = useState({
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com"
    });
    const [isModalVisible, setIsModalVisible] = useState(false);

    const APPLICATION_ID = 'sandbox-sq0idb-zpwIkYe7ALhGiYVqJgT8aA';
    const LOCATION_ID = 'LMGSEFQN3X8R2';
    const URL = process.env.SQUARE_SERVICE_ENDPOINT;
    console.log('URL' + URL);

    var total = 0;

    for (let item of cart){
        total+=(item.cost * item.count);
    }

    async function checkoutRequest(data) {
        // Default options are marked with *
        const response = await fetch(URL, {
          method: 'POST', 
          mode: 'cors',
          headers: {
            'Square-Version': '2021-02-26',
            'Authorization': process.env.SQUARE_APPLICATION_ID,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        return response.json();
      }



  
    function cardNonceResponseReceived(errors, nonce, cardData, buyerVerificationToken) {
      if (errors) {
        console.log(errors)
        return;
      }
  
      alert('nonce created: ' + nonce + ', buyerVerificationToken: ' + buyerVerificationToken);
      var data = {
          idempotency_key: uuidv4(),
          amount_money: {
              amount: total * 100,
              currency: "USD"
          },
          source_id: nonce,
          autocomplete: true,
          location_id: LOCATION_ID, 
      }
      var response = checkoutRequest(data);
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
          amount: total + '00',
          pending: false,
        },
        lineItems: [
          {
            label: 'Subtotal',
            amount:  total + '00',
            pending: false,
          },
        ],
      };
    }
  
    function createVerificationDetails() {
      return {
        amount: total + '00',
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
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
      <div>
          <Button type="primary" className="grey" onClick={showModal}>Checkout</Button>
          <Modal title="Checkout" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
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
        
                <CreditCardSubmitButton>Pay ${total}</CreditCardSubmitButton>
                </div>
            </SquarePaymentForm>
          </Modal>
      </div>
    );
  };
  export default Store;

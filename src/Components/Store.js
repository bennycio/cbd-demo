import React, {useContext, useState, useEffect} from 'react';
import '../css/Store.scss'
import {FaInfoCircle, FaShoppingCart, FaRegPlusSquare, FaRegMinusSquare} from 'react-icons/fa'
import {Typography, Divider, Row, Col, Drawer, Button, Modal, message, Result} from 'antd';
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



    const ckStandard = {
        name: "Scentless Standard",
        cost: 50,
        description: "Fantastic effects without a scent",
        size: '2oz'
    }
    const ckXL = {
        name: "Scentless Extra",
        cost: 65,
        description: "Fantastic effects without a scent",
        size: '3oz'
    }
    const ckMintStandard = {
        name: "Minty Standard",
        cost: 50,
        description: "Minty freshness mixed with cool relief",
        size: '2oz'
    }
    const ckMintXL = {
        name: "Minty Extra",
        cost: 65,
        description: "Minty freshness mixed with cool relief",
        size: '3oz'
    }



    return (
        <div className="body" >
            <div className="container-fluid store-header shadowed" >
                <Title className="padding-left small-padding-top-bottom" style={{color: '#ffffff'}}>Products</Title>
            </div>
            <div className="container products-container margin-top-bottom">
                <Cart  />
                <Divider orientation="left" className="divider-lower">Scent Free</Divider>
                <Row gutter={30} className="standard">
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Product name={ckStandard.name} cost={ckStandard.cost} description={ckStandard.description} size={ckStandard.size} />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Product name={ckXL.name} cost={ckXL.cost} description={ckXL.description} size={ckXL.size}/>
                    </Col>
                </Row>
                <Divider orientation="left" className="divider-lower">Mint Scented</Divider>
                <Row gutter={30} className="mint">
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Product name={ckMintStandard.name} cost={ckMintStandard.cost} description={ckMintStandard.description} size={ckMintStandard.size}/>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Product name={ckMintXL.name} cost={ckMintXL.cost} description={ckMintXL.description} size={ckMintXL.size} />
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

    return(
        <div className="add-to-cart">
            <span className="counter solid-icon" onClick={() => {
                if (count > 0){
                    clone[index].count = count - 1;
                    setCart(clone);
                }
            }}><FaRegMinusSquare /></span>
            <span className=" counter solid-icon" onClick={() => {
                clone[index].count = count + 1;
                setCart(clone);
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
                <h2 className="centered">{props.name}</h2>
                <h3>{props.description}</h3>
                <h3>Size: {props.size}</h3>
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

    const [total, setTotal] = useState(0);

    function openDrawer(){
        setVisible(true);
    }

    function closeDrawer(){
        setVisible(false);
    }

    useEffect(() =>{
        var t = 0;
        cart.forEach((item) => {
            t+=(item.cost * item.count)
        })
        setTotal(t);
    }, [cart]);

    const cartItems = []
    cart.forEach((item) =>{
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
        <button className="cart-button" onClick={openDrawer}><i className="icon-large solid-icon"><FaShoppingCart /></i></button>
    <Drawer
    width={400}
    title="Cart"
    placement="left"
    closable={true}
    onClose={closeDrawer}
    visible={visible}
    >
        <div>
            {cartItems}
        </div>
        <h4>Total: ${total}</h4>
        <Checkout />
    </Drawer>
    </div>
    );
  }

  const Checkout = () => {

    const {cart, setCart} = useContext(CartContext);

    const [firstName, setFirstName] = useState("John");
    const [lastName, setlastName] = useState("Doe");
    const [email, setEmail] = useState("johndoe@gmail.com");
    const [zip, setZip] = useState("90101");

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isResultVisible, setResultVisible] = useState(false);

    const APPLICATION_ID = 'sandbox-sq0idb-zpwIkYe7ALhGiYVqJgT8aA';
    const LOCATION_ID = 'LMGSEFQN3X8R2';
    const URL = process.env.REACT_APP_SQUARE_SERVICE_ENDPOINT;

    var total = 0;

    for (let item of cart){
        total+=(item.cost * item.count);
    }

    const [success, setSuccess] = useState(false);


    async function checkoutRequest(data) {
        const response = fetch(URL, {
          method: 'POST', 
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        console.log(response.status);
        return response.status;
    }



  
    function cardNonceResponseReceived(errors, nonce, cardData, buyerVerificationToken) {
      if (errors) {
        console.log(errors)
        return;
      }
      var data = {
          idempotency_key: uuidv4(),
          amount_money: {
              amount: total * 100,
              currency: "USD"
          },
          source_id: nonce,
          verification_token: buyerVerificationToken,
          autocomplete: true,
          location_id: LOCATION_ID, 
      }
      var status = checkoutRequest(data);
      if (status === 200){
          setSuccess(true);
      } else{
          setSuccess(false);
      }
      setIsModalVisible(false);
      setResultVisible(true);
    }
  
    function createPaymentRequest() {
        
      return {
        requestShippingAddress: false,
        requestBillingInfo: false,
        currencyCode: 'USD',
        countryCode: 'US',
        total: {
          label: 'cbd-demo',
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
          familyName: lastName,
          givenName: firstName,
          email: email,
          country: 'US',
          city: 'London',
          addressLines: ["1235 Emperor's Gate"],
          postalCode: 'SW7 4JA',
          phone: '020 7946 0532',
        },
      };
    }
  
    function postalCode(zip) {
      setZip(zip);
      return zip;
    }
  
    function focusField() {
      return 'cardNumber';
    }
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setResultVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showResult = () => {
        setIsModalVisible(true);
    };

    const handleOkResult = () => {
        setResultVisible(false);
    };

    const handleCancelResult = () => {
        setResultVisible(false);
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
            <Modal title="Checkout" visible={isResultVisible} onOk={handleOkResult} onCancel={handleCancelResult} footer={null}>
                <Result
                status="success"
                title="Successfully ordered Canna Kool!"
                subTitle="Order number: 2017182818828182881 Please check your email for shipping details."
                extra={[
                <Button type="primary" onClick={handleOkResult}>
                    Continue
                </Button>
                ]}
                />
          </Modal>
      </div>
    );
  };

  export default Store;

import React, { useContext, useState, useEffect } from "react";
import "../css/Store.scss";
import {
  FaInfoCircle,
  FaRegPlusSquare,
  FaRegMinusSquare,
  FaWindowClose,
} from "react-icons/fa";
import {
  Typography,
  Divider,
  Row,
  Col,
  Drawer,
  Button,
  Modal,
  Result,
  Spin,
  Form,
  Input,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../App";
import {
  SquarePaymentForm,
  CreditCardCVVInput,
  CreditCardExpirationDateInput,
  CreditCardNumberInput,
  CreditCardPostalCodeInput,
  CreditCardSubmitButton,
} from "react-square-payment-form";

import { v4 as uuidv4 } from "uuid";
import { useList } from "react-use";
import Checkbox from "antd/lib/checkbox/Checkbox";

const { Title } = Typography;

const Store = () => {
  const ckStandard = {
    name: "Odorless Standard",
    cost: 50,
    description: "Fantastic effects without a scent",
    size: "2oz",
  };
  const ckXL = {
    name: "Odorless Extra",
    cost: 65,
    description: "Fantastic effects without a scent",
    size: "3oz",
  };
  const ckMintStandard = {
    name: "Minty Standard",
    cost: 50,
    description: "Minty freshness mixed with cool relief",
    size: "2oz",
  };
  const ckMintXL = {
    name: "Minty Extra",
    cost: 65,
    description: "Minty freshness mixed with cool relief",
    size: "3oz",
  };

  return (
    <div className="body">
      <div className="container-fluid store-header shadowed">
        <Title
          className="padding-left small-padding-top-bottom"
          style={{ color: "#ffffff" }}
        >
          Products
        </Title>
      </div>
      <div className="container products-container margin-top padding-bottom">
        <Cart />
        <Divider orientation="left" className="divider-lower">
          Scent Free
        </Divider>
        <Row className="standard">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Product
              name={ckStandard.name}
              cost={ckStandard.cost}
              description={ckStandard.description}
              size={ckStandard.size}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Product
              name={ckXL.name}
              cost={ckXL.cost}
              description={ckXL.description}
              size={ckXL.size}
            />
          </Col>
        </Row>
        <Divider orientation="left" className="divider-lower">
          Mint Scented
        </Divider>
        <Row className="mint">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Product
              name={ckMintStandard.name}
              cost={ckMintStandard.cost}
              description={ckMintStandard.description}
              size={ckMintStandard.size}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Product
              name={ckMintXL.name}
              cost={ckMintXL.cost}
              description={ckMintXL.description}
              size={ckMintXL.size}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const Counter = (props) => {
  const {
    cart,
    set,
    push,
    updateAt,
    insertAt,
    update,
    updateFirst,
    upsert,
    sort,
    filter,
    removeAt,
    clear,
    reset,
  } = useContext(CartContext);

  var index = cart.findIndex((i) => i.name === props.name);
  const clone = cart[index];

  return (
    <div className="add-to-cart">
      <span
        className="counter solid-icon"
        onClick={() => {
          if (clone.count > 1) {
            clone.count = clone.count - 1;
            updateAt(index, clone);
          }
        }}
      >
        <FaRegMinusSquare />
      </span>
      <span
        className=" counter solid-icon"
        onClick={() => {
          if (clone.count < 100) {
            clone.count = clone.count + 1;
            updateAt(index, clone);
          }
        }}
      >
        <FaRegPlusSquare />
      </span>
    </div>
  );
};

const Product = (props) => {
  const {
    cart,
    set,
    push,
    updateAt,
    insertAt,
    update,
    updateFirst,
    upsert,
    sort,
    filter,
    removeAt,
    clear,
    reset,
  } = useContext(CartContext);

  function changeAddedTxt() {
    document.getElementById(props.name).innerHTML = "Added to Cart";
    setTimeout(() => {
      document.getElementById(props.name).innerHTML = "Add to Cart";
    }, 3000);
  }
  function changeAdded() {
    var index = cart.findIndex((i) => i.name === props.name);
    if (index === -1) {
      push({ name: props.name, cost: props.cost, count: 1 });
      changeAddedTxt();
    }
  }

  return (
    <>
      <div class="product-wrapper shadowed">
        <div class="product-container">
          <div class="top"></div>
          <div class="bottom">
            <div class="details">
              <h3>{props.name}</h3>
              <h3>${props.cost}</h3>
            </div>
          </div>
        </div>
        <div class="inside">
          <div class="icon">
            <i class="material-icons">
              <FaInfoCircle />
            </i>
          </div>
          <div class="contents">
            <h2 className="centered">{props.name}</h2>
            <h2>{props.description}</h2>
            <h2>Size: {props.size}</h2>
          </div>
        </div>
      </div>
      <div className="centered">
        <button class="learn-more centered" onClick={changeAdded}>
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span id={props.name} class="button-text">
            Add to Cart
          </span>
        </button>
      </div>
    </>
  );
};

const Cart = (props) => {
  const {
    cart,
    set,
    push,
    updateAt,
    insertAt,
    update,
    updateFirst,
    upsert,
    sort,
    filter,
    removeAt,
    clear,
    reset,
  } = useContext(CartContext);

  const [visible, setVisible] = useState(false);

  const [total, setTotal] = useState(0);

  function openDrawer() {
    setVisible(true);
  }

  function closeDrawer() {
    setVisible(false);
  }

  useEffect(() => {
    var t = 0;
    cart.forEach((item) => {
      t += item.cost * item.count;
    });
    setTotal(t);
  }, [cart]);

  const cartItems = [];
  cart.forEach((item) => {
    cartItems.push(
      <div key={item.name}>
        <FaWindowClose
          size={"1.5em"}
          style={{ float: "right", cursor: "pointer" }}
          onClick={() => {
            var index = cart.findIndex((i) => i.name === props.name);
            removeAt(index);
          }}
        />
        <p>{item.name}</p>
        <p>Cost: ${item.cost}</p>
        <p>Count: {item.count}</p>
        <Counter name={item.name} />
        <Divider />
      </div>
    );
  });

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={<ShoppingCartOutlined />}
        onClick={openDrawer}
        className="cart-button"
        style={{
          color: "black",
          textAlign: "center",
          position: "sticky",
          top: "5%",
          zIndex: "1000",
        }}
      />
      <Drawer
        width={400}
        title="Cart"
        placement="left"
        closable={true}
        onClose={closeDrawer}
        visible={visible}
      >
        <div>{cartItems}</div>
        <h4>Total: ${total}</h4>
        <Checkout />
      </Drawer>
    </>
  );
};

const Checkout = () => {
  const { cart, clear } = useContext(CartContext);

  const [email, setEmail] = useState("test@gmail.com");
  const [shippingDetails, setShippingDetails] = useState({});
  const [billingDetails, setBillingDetails] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isResultVisible, setResultVisible] = useState(false);
  const [isShippingAndBillingFilled, setShippingAndBillingFilled] = useState(
    false
  );

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const APPLICATION_ID = "sandbox-sq0idb-zpwIkYe7ALhGiYVqJgT8aA";
  const LOCATION_ID = "LMGSEFQN3X8R2";
  const URL = process.env.REACT_APP_SQUARE_SERVICE_ENDPOINT;

  var total = 0;

  for (let item of cart) {
    total += item.cost * item.count;
  }

  async function checkoutRequest(data) {
    const response = await fetch(URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.ok);
    return response;
  }

  function cardNonceResponseReceived(
    errors,
    nonce,
    cardData,
    buyerVerificationToken
  ) {
    if (errors) {
      console.log(errors);
      setErrors(errors);
      return;
    }
    var data = {
      idempotency_key: uuidv4(),
      amount_money: {
        amount: total * 100,
        currency: "USD",
      },
      billing_address: billingDetails,
      shipping_address: shippingDetails,
      source_id: nonce,
      verification_token: buyerVerificationToken,
      autocomplete: true,
      location_id: LOCATION_ID,
    };
    checkoutRequest(data).then((response) => {
      if (response.ok) {
        setSuccess(true);
      }
      setLoading(false);
      setIsModalVisible(false);
      setResultVisible(true);
    });
  }

  function createPaymentRequest() {
    setLoading(true);
    return {
      requestShippingAddress: true,
      requestBillingInfo: true,
      currencyCode: "USD",
      countryCode: "US",
      total: {
        label: "Canna-Kool",
        amount: total + "00",
        pending: false,
      },
      lineItems: [
        {
          label: "Subtotal",
          amount: total + "00",
          pending: false,
        },
      ],
    };
  }

  function createVerificationDetails() {
    setLoading(true);
    return {
      amount: total + "00",
      currencyCode: "USD",
      intent: "CHARGE",
      billingContact: {
        familyName: billingDetails.last_name,
        givenName: billingDetails.first_name,
        email: email,
        country: "US",
        city: billingDetails.locality,
        addressLines: [billingDetails.address_line_1],
        postalCode: billingDetails.postal_code,
      },
    };
  }

  function postalCode() {
    return billingDetails.postal_code;
  }

  function focusField() {
    return "cardNumber";
  }

  function resetCheckout() {
    setShippingDetails({});
    setBillingDetails({});
    setShippingAndBillingFilled(false);
  }

  const showModal = () => {
    if (cart && cart.length) {
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setResultVisible(true);
    resetCheckout();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    resetCheckout();
  };

  const handleOkResult = () => {
    setResultVisible(false);
    resetCheckout();
    clear();
  };

  const handleCancelResult = () => {
    setResultVisible(false);
    resetCheckout();
    clear();
  };

  const ShippingAndBillingForm = () => {
    var shippingDetails = {};
    var billingDetails = {};

    const onFinish = (values) => {
      setShippingDetails(shippingDetails);
      setBillingDetails(billingDetails);
      setShippingAndBillingFilled(true);
      console.log(shippingDetails);
      console.log(billingDetails);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Divider orientation="left">Shipping Details</Divider>
        <Form.Item
          label="First Name"
          name="First Name"
          rules={[
            {
              required: true,
              message: "First Name Required",
            },
          ]}
        >
          <Input
            placeholder="Bob"
            onChange={(e) => {
              shippingDetails.first_name = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="Last Name"
          rules={[
            {
              required: true,
              message: "Last Name Required",
            },
          ]}
        >
          <Input
            placeholder="Goldberg"
            onChange={(e) => {
              shippingDetails.last_name = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Email Required",
            },
          ]}
        >
          <Input
            placeholder="cooldude@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Address Line 1"
          name="Address Line 1"
          rules={[
            {
              required: true,
              message: "Address Required",
            },
          ]}
        >
          <Input
            placeholder="12345 Happy St."
            onChange={(e) => {
              shippingDetails.address_line_1 = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          label="Address Line 2"
          name="Address Line 2"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input
            placeholder="Apt 2"
            onChange={(e) => {
              shippingDetails.address_line_2 = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          label="City"
          name="City"
          rules={[
            {
              required: true,
              message: "City required",
            },
          ]}
        >
          <Input
            placeholder="Los Angeles"
            onChange={(e) => {
              shippingDetails.locality = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          label="Zip"
          name="Zip"
          rules={[
            {
              required: true,
              message: "Zip required",
            },
          ]}
        >
          <Input
            placeholder="90101"
            onChange={(e) => {
              shippingDetails.postal_code = e.target.value;
            }}
          />
        </Form.Item>
        <Divider orientation="left">Billing Details</Divider>
        <Form.Item
          label="First Name"
          name="Billing First Name"
          rules={[
            {
              required: true,
              message: "First Name Required",
            },
          ]}
        >
          <Input
            placeholder="Bob"
            onChange={(e) => {
              billingDetails.first_name = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="Billing Last Name"
          rules={[
            {
              required: true,
              message: "Last Name Required",
            },
          ]}
        >
          <Input
            placeholder="Goldberg"
            onChange={(e) => {
              billingDetails.last_name = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          label="Address Line 1"
          name="Billing Address Line 1"
          rules={[
            {
              required: true,
              message: "Address Required",
            },
          ]}
        >
          <Input
            placeholder="12345 Happy St."
            onChange={(e) => {
              billingDetails.address_line_1 = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          label="Address Line 2"
          name="Billing Address Line 2"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input
            placeholder="Apt 2"
            onChange={(e) => {
              billingDetails.address_line_2 = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          label="City"
          name="Billing City"
          rules={[
            {
              required: true,
              message: "City required",
            },
          ]}
        >
          <Input
            placeholder="Los Angeles"
            onChange={(e) => {
              billingDetails.locality = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          label="Zip"
          name="Billing Zip"
          rules={[
            {
              required: true,
              message: "Zip required",
            },
          ]}
        >
          <Input
            placeholder="90101"
            onChange={(e) => {
              billingDetails.postalCode = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

  const CheckoutForm = () => {
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
        <div
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
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
          <CreditCardSubmitButton id="checkout-button">
            Pay ${total}
          </CreditCardSubmitButton>
        </div>
      </SquarePaymentForm>
    );
  };

  return (
    <>
      <Button type="primary" className="grey" onClick={showModal}>
        Checkout
      </Button>

      <Modal
        title="Checkout"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Spin spinning={loading}>
          {isShippingAndBillingFilled ? (
            <CheckoutForm />
          ) : (
            <ShippingAndBillingForm />
          )}
        </Spin>
      </Modal>
      <Modal
        title="Checkout"
        visible={isResultVisible}
        onOk={handleOkResult}
        onCancel={handleCancelResult}
        footer={null}
      >
        <Result
          status={success ? "success" : "error"}
          title={
            success
              ? "Successfully ordered Canna Kool"
              : "Unsuccessful Transfer"
          }
          subTitle={
            success
              ? "Please check your email for shipping details and order confirmation"
              : "Please check that you entered your information correctly. If error persists, contact site administrators. "
          }
          extra={[
            <Button type="primary" onClick={handleOkResult}>
              Continue
            </Button>,
          ]}
        />
      </Modal>
    </>
  );
};

export default Store;

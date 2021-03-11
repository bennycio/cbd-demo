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
  Select,
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
import { useList, useToggle } from "react-use";

const { Title } = Typography;
const { Option } = Select;

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
        <Row gutter={30} className="standard">
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
        <Row gutter={30} className="mint">
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
    if (!cart.includes({ name: props.name, cost: props.cost })) {
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
              <h5>{props.name}</h5>
              <h5>${props.cost}</h5>
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
  const { cart } = useContext(CartContext);

  const [firstName, setFirstName] = useState("John");
  const [lastName, setlastName] = useState("Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [billingZip, setBillingZip] = useState("90101");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isResultVisible, setResultVisible] = useState(false);
  const [isShippingFilled, toggleShippingFilled] = useToggle(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([])

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
      requestShippingAddress: false,
      requestBillingInfo: false,
      currencyCode: "USD",
      countryCode: "US",
      total: {
        label: "cbd-demo",
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
        familyName: lastName,
        givenName: firstName,
        email: email,
        country: "US",
        city: "London",
        addressLines: ["1235 Emperor's Gate"],
        postalCode: "SW7 4JA",
        phone: "020 7946 0532",
      },
    };
  }

  function postalCode() {
    return billingZip;
  }

  function focusField() {
    return "cardNumber";
  }

  const showModal = () => {
    if (cart && cart.length) {
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setResultVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOkResult = () => {
    setResultVisible(false);
  };

  const handleCancelResult = () => {
    setResultVisible(false);
  };

  const onFinish = (values) => {
    toggleShippingFilled(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const ShippingDetailsForm = () => {
    return (
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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
          <Input placeholder="Bob" />
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
          <Input placeholder="Goldberg" />
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
          <Input placeholder="cooldude@gmail.com" />
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
          <Input placeholder="12345 Happy St." />
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
          <Input placeholder="Apt 2" />
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
          <Input placeholder="Los Angeles" />
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
          <Input placeholder="90101" />
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
          {isShippingFilled ? <CheckoutForm /> : <ShippingDetailsForm />}
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

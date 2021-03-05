import React, {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Store.scss'
import {FaInfoCircle, FaShoppingCart} from 'react-icons/fa'
import {Typography, Divider, Row, Col, Avatar, Drawer, Button} from 'antd';
import {CartContext} from '../App'

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

    const [count, setCount] = useState(0);


    console.log(props)
    return(
        <span className="add-to-cart">
            <span className="counter shadowed-img" onClick={() => {
                if (count > 0){
                    setCount(count - 1)
                    setCart(cart - props.cost)
                }
            }}>-</span>
            <span className="txt">{count}</span>
            <span className="counter shadowed-img" onClick={() => {
                setCount(count + 1)
                setCart(cart + props.cost)
            }}>+</span>
        </span>
    );
  }



  const Product = (props) => {
    const {cart, setCart} = useContext(CartContext);

    const [added, setAdded] = useState(cart.includes({name: props.name, cost: props.cost}))

    function changeAdded(){
        const clone = JSON.parse(JSON.stringify(cart));
        if (added === false){
            clone.push({name: props.name, cost: props.cost});
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
                <p>{item.cost}</p>
            </div>
        );
    });

    return (
    <div>
        <button className="circle-border margin-left" onClick={openDrawer}><Avatar size="large" icon={<FaShoppingCart />} className="cart-icon"/></button>
    <Drawer
    widht={640}
    title="Cart"
    placement="left"
    closable={true}
    onClose={closeDrawer}
    visible={visible}
    >
        {cartItems}
        <Button type="primary" className="grey"><NavLink to="/checkout">Checkout</NavLink></Button>
    </Drawer>
    </div>
    );
  }

  export default Store;

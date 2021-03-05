import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Store.scss'
import {FaInfoCircle, FaShoppingCart} from 'react-icons/fa'
import {Typography, Divider, Row, Col, Avatar, Drawer, Button} from 'antd';

const {Title} = Typography;

export default class Store extends React.Component {


    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            cart: this.props.cart
        }
    }

    handleChange(value){
        this.setState({cart: value}, this.props.handleChange(value))
    }

    render(){


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
                <Cart cart={this.props.cart} />
                <div className="container products-container margin-top-bottom">
                    <Row gutter={30}>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Product name={premium.name} cost={premium.cost} description={premium.description} handleChange={this.handleChange} cart={this.props.cart}/>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Product name={ultimate.name} cost={ultimate.cost} description={ultimate.description} handleChange={this.handleChange} cart={this.props.cart}/>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Product name={soulWrencher.name} cost={soulWrencher.cost} description={soulWrencher.description} handleChange={this.handleChange} cart={this.props.cart}/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
  }


  class Counter extends React.Component{

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeCount = this.handleChangeCount.bind(this)
        this.state = {
            cart: this.props.cart,
            count: 0
        }
    }
    handleChange(value){
        this.setState({cart: value}, this.props.handleChange(value))
    }
    handleChangeCount(value){
        this.setState({count: value}, this.props.handleChange(value))
    }



    render(){
        console.log(this.props)
        return(
            <span className="add-to-cart">
                <span className="counter shadowed-img" onClick={() => {
                    if (this.state.count > 0){
                        this.handleChangeCount(this.state.count - 1)
                        this.handleChange(this.props.cart - this.props.cost)
                    }
                }}>-</span>
                <span className="txt">{this.state.count}</span>
                <span className="counter shadowed-img" onClick={() => {
                    this.handleChangeCount(this.state.count + 1)
                    this.handleChange(this.props.cart + this.props.cost)
                }}>+</span>
            </span>
        )
    }
  }



  class Product extends React.Component {


    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.changeAddedState = this.changeAddedState.bind(this);
        this.state = {
            cart: this.props.cart,
            added: false,
        }
    }

    handleChange(value){
        this.setState({cart: value}, this.props.handleChange(value))
    }
    changeAddedState(value){
        this.setState({added: value});
        const clone = JSON.parse(JSON.stringify(this.props.cart));
        if (value === true){
            clone.push({name: this.props.name, cost: this.props.cost});
            this.handleChange(clone);
            document.getElementById("button-text").innerHTML = "Added to Cart";
        }
        else if (value === false){
            var index = clone.findIndex(p => p.name === this.props.name)
            var splicedClone = clone.splice(index, 1);
            if (splicedClone.length === 1){
                this.handleChange([]);
            } else {
                this.handleChange(splicedClone);
            }
            console.log(splicedClone)
            document.getElementById("button-text").innerHTML = "Add to Cart";
        }
    }



      render(){

          return (
            <div>
                <div class="product-wrapper shadowed">
                    <div class="product-container">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="details">
                            <h5>{this.props.name}</h5>
                            <h5>${this.props.cost}</h5>
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
                    <button class="learn-more centered" onClick={() => {
                        this.changeAddedState(!this.state.added);
                    }}>
                        <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                        </span>
                        <span id="button-text" class="button-text" >Add To Cart</span>
                    </button>
                </div>
            </div>
          )
      }
  }

  class Cart extends React.Component {
      constructor(props){
          super(props);
          this.openDrawer = this.openDrawer.bind(this);
          this.closeDrawer = this.closeDrawer.bind(this);
          this.state = {
              visible: false
           }
       }

        openDrawer(){
            this.setState({visible: true});
        }
        closeDrawer(){
            this.setState({visible: false});
        }

        render(){

            const cartItems = []
            this.props.cart.forEach(function(item){
                cartItems.push(
                    <div key={item.name}>
                        <p>{item.name}</p>
                        <p>{item.cost}</p>
                    </div>
                );
            });

            return (
            <div>
                <button className="circle-border margin-left" onClick={this.openDrawer}><Avatar size="large" icon={<FaShoppingCart />} className="cart-icon"/></button>
            <Drawer
            widht={640}
            title="Cart"
            placement="left"
            closable={true}
            onClose={this.closeDrawer}
            visible={this.state.visible}
            >
                {cartItems}
                <Button type="primary" className="grey"><NavLink to="/checkout">Checkout</NavLink></Button>
            </Drawer>
            </div>
            )
        }
  }

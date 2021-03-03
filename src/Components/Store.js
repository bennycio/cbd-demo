import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Store.scss'

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
                {/* <div class="wrapper">
                <div class="slideshows">
                <div class="slideshow slideshow--hero">
                    <div class="slides">
                    <div class="slide slide1"></div>
                    <div class="slide slide2"></div>
                    <div class="slide slide3"></div>
                    </div>
                </div>
                <div class="slideshow slideshow--contrast slideshow--contrast--before">
                    <div class="slides">
                    <div class="slide slide1"></div>
                    <div class="slide slide2"></div>
                    <div class="slide slide3"></div>
                    </div>
                </div>
                <div class="slideshow slideshow--contrast slideshow--contrast--after">
                    <div class="slides">
                    <div class="slide slide1"></div>
                    <div class="slide slide2"></div>
                    <div class="slide slide3"></div>
                    </div>
                </div>
                </div>
                </div> */}
                <div className="container products-container">
                <h1 className="centered">Products</h1>
                <hr className="separator separator--dots"/>
                <div className="row">
                    <div className="col-lg-4">
                    <Product name={premium.name} cost={premium.cost} description={premium.description} handleChange={this.handleChange} cart={this.props.cart}/>
                    </div>
                    <div className="col-lg-4">
                    <Product name={ultimate.name} cost={ultimate.cost} description={ultimate.description} handleChange={this.handleChange} cart={this.props.cart}/>
                    </div>
                    <div className="col-lg-4">
                    <Product name={soulWrencher.name} cost={soulWrencher.cost} description={soulWrencher.description} handleChange={this.handleChange} cart={this.props.cart}/>
                    </div>
                </div>
                <div className="totals">
                    <div class="totals-inner">
                        <NavLink className="btn btn-primary learn-more" to="/checkout" style={{ textDecoration: 'none' }}>Checkout Total ${this.props.cart} »</NavLink>
                    </div>
                </div>
                <hr />
                <footer>
                    <p className="pull-right"><a href="#">Back to top</a></p>
                    <p>© 2021 CBD Inc. <a href="#">Privacy</a> · <a href="#">Terms</a></p>
                </footer>
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
          return (

            <div className="container page-wrapper">
            <div className="page-inner">
            <div className="row">
                <div className="el-wrapper">
                <div className="box-up">
                    <img className="img" src="images/storecbd.png" alt="" />
                    <div className="img-info">
                    <div className="info-inner">
                        <span className="p-type">{this.props.name}</span>
                        <span className="p-tag">{this.props.description}</span>
                    </div>
                    <div className="a-size">Strength: <span className="size">500 mg per serving</span></div>
                    </div>
                </div>
                <div className="box-down">
                    <div className="h-bg">
                    <div className="h-bg-inner" />
                    </div>
                    <div className="cart">
                        <span className="price">${this.props.cost}</span>
                        <Counter handleChange={this.handleChange}  cart={this.props.cart} cost={this.props.cost}/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
          )
      }
  }

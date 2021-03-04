import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Store.scss'
import {FaInfoCircle} from 'react-icons/fa'

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
                <div className="container products-container">
                <h1 className="centered top-pad">Products</h1>
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
                <hr />
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
          )
      }
  }

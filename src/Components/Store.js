import React from 'react';
import { NavLink } from 'react-router-dom';


class Store extends React.Component {


    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.state = {
            first: {price: 25, count: 0},
            second: {price: 50, count: 0},
            third: {price: 100, count: 0}
        };
    }

    handleChange(){
        this.props.handleChange((this.state.first.count * this.state.first.price) + (this.state.second.count * this.state.second.price) + (this.state.third.count * this.state.third.price));
    }

    increment(counter){
        // eslint-disable-next-line default-case
        switch (counter){
            case 'first':
                this.setState({first: ({price: this.state.first.price, count: this.state.first.count + 1})})
                break;
            case 'second':
                this.setState({second: ({price: this.state.second.price, count: this.state.second.count + 1})})
                break;
            case 'third':
                this.setState({third: ({price: this.state.third.price, count: this.state.third.count + 1})})
                break;
        }
     }

     decrement(counter){
        // eslint-disable-next-line default-case
        switch (counter){
            case 'first':
                if (this.state.first.count > 0){
                        this.setState({first: ({price: this.state.first.price, count: this.state.first.count - 1})})
                    }
                break;
            case 'second':
                if (this.state.second.count > 0){
                    this.setState({first: ({second: this.state.second.price, count: this.state.second.count - 1})})
                }
                break;
            case 'third':
                if (this.state.third.count > 0){
                    this.setState({third: ({price: this.state.third.price, count: this.state.third.count - 1})})
                }
                break;
        }
    }
     

    render(){

        const first = this.state.first.count
        const second = this.state.second.count
        const third = this.state.third.count
        const total = first + second + third
        const totalPrice = (this.state.first.count * this.state.first.price) + (this.state.second.count * this.state.second.price) + (this.state.third.count * this.state.third.price)

        return (
            <div className="body">
                <div className="container products-container">
                <div className="container">
                </div>
                <h1>Products</h1>
            <hr className="separator separator--dots"/>
                <div className="row">
                <div className="col-lg-4">
                <div className="container page-wrapper">
                    <div className="page-inner">
                    <div className="row">
                        <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src="images/storecbd.png" alt="" />
                            <div className="img-info">
                            <div className="info-inner">
                                <span className="p-type">Premium</span>
                                <span className="p-tag">I feel like royalty</span>
                            </div>
                            <div className="a-size">Strength:<span className="size">100 mg per serving</span></div>
                            </div>
                        </div>
                        <div className="box-down">
                            <div className="h-bg">
                            <div className="h-bg-inner" />
                            </div>
                            <div className="cart">
                                <span className="price">${this.state.first.price}</span>
                                <span className="add-to-cart">
                                    <Counter increment={this.increment} decrement={this.decrement} total={first} counter='first'/>
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="container page-wrapper">
                    <div className="page-inner">
                        <div className="row">
                        <div className="el-wrapper">
                            <div className="box-up">
                            <img className="img" src="images/storecbd.png" alt="" />
                            <div className="img-info">
                                <div className="info-inner">
                                <span className="p-type">Ultimate</span>
                                <span className="p-tag">I've never felt so chill</span>
                                </div>
                                <div className="a-size">Strength:<span className="size">250 mg per serving</span></div>
                            </div>
                            </div>
                            <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner" />
                                </div>
                                <div className="cart">
                                <span className="price">${this.state.second.price}</span>
                                <span className="add-to-cart">
                                    <Counter increment={this.increment} decrement={this.decrement} total={second} counter='second'/>
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="container page-wrapper">
                        <div className="page-inner">
                        <div className="row">
                            <div className="el-wrapper">
                            <div className="box-up">
                                <img className="img" src="images/storecbd.png" alt="" />
                                <div className="img-info">
                                <div className="info-inner">
                                    <span className="p-type">Soul-Wrencher</span>
                                    <span className="p-tag">I'm on the moon</span>
                                </div>
                                <div className="a-size">Strength: <span className="size">500 mg per serving</span></div>
                                </div>
                            </div>
                            <div className="box-down">
                                <div className="h-bg">
                                <div className="h-bg-inner" />
                                </div>
                                <div className="cart">
                                    <span className="price">${this.state.third.price}</span>
                                    <Counter increment={this.increment} decrement={this.decrement} total={third} counter='third'/>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="totals">
                    <div class="totals-inner">
                    <NavLink className="btn btn-primary learn-more" to="/checkout" style={{ textDecoration: 'none' }}>Checkout Total ${totalPrice} »</NavLink>
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
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment(){
        this.props.increment(this.props.counter)
    }
    decrement(){
        this.props.decrement(this.props.counter)
    }

    render(){
        const total = this.props.total
        return(
            <span className="add-to-cart">
                <span className="counter shadowed-img" onClick={this.decrement.bind(this)}>-</span>
                <span className="txt">{total}</span>
                <span className="counter shadowed-img" onClick={this.increment.bind(this)}>+</span>
            </span>
        )
    }
  }

  export default Store;
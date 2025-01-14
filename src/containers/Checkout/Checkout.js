import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route,Redirect} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component{
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
  
    render(){
        const purchaseRedirect=this.props.purchased?<Redirect to="/burger"/>:null
        return(
            <div>
                {purchaseRedirect}
                <CheckoutSummary ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>

                <Route path={this.props.match.path + '/contact-data'} 
                 component={ContactData}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        purchased:state.order.purchased
    };
}

export default connect(mapStateToProps)(Checkout);

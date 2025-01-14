import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../Layout/UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open]
    }
 return (
            <Auxiliary>
                <Backdrop show = {props.open} clicked={props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <div style={{height:"10%",marginBottom:"32px"}}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems isAuthenticated={props.isAuth}/>
                    </nav>
                </div>
            </Auxiliary>
 )
};

export default sideDrawer;
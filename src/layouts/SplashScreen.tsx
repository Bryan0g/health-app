import {useEffect, useState} from "react";
import { View, Image, StyleSheet } from "react-native";
import LoginScreen from "./loginScreen";

export default function SplashScreen(){
    const[showLogin, SetShowLogin]= useState(false);

    useEffect(() =>{
        const timer = setTimeout(()=>{
             SetShowLogin(true);         
        }, 3000);
         return() =>clearTimeout(timer);
    },[]);
       
    if(showLogin){
        return <LoginScreen/>;
    }
    return(
          <view>
                <Image source={require("../assest/logo.png")} />
          </view>
    )
}
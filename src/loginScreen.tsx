import {userNavigation } from "expo-router";
import {View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from "react-native";
import {userEffect} from "react";


export default function LoginScreen() {
     ///const [email, setEmail]= userState();
     const navigation = useNavigation();

     useEffect(()=>{
        navigation.setOptions({headerShown: false})
     }, [navigation]);

  return (
    <View style={styles.container}>
      
      <Text style={styles.tilte}>Sing in</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="admin@mail.com" />

      <TextInput
        style={styles.input}
        placeholder="***********"
        secureTextEntry/>

      <TouchableOpacity style={styles.buttom}>
        <Text style={styles.buttonText}>login </Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.creative({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItem:"center",
        backgroundcolor:"#ff5733",
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        margingButtom:20,
    },

    input:{

        width: "80%",
        padding: 10,
        marginVertical: 10,
        getBackgroundColor: "white",
        borderRadius:5,
        borderWidht:1,
        borederColor: "#ccc"

    },
    button:{
        marginTop:20,
        getBackgroundColor:"#008CBA",
        padding: 10,
        borderRadius: 5,
        Widht:"80 %"

    },
    buttonText:{
        color:"white",
        fontSize: 18,
        fontWeight: "bold"
    },
})

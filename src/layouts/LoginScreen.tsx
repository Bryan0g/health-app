import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import RegisterScreen from "./RegisterScreen";

export default function LoginScreen() {
  const router = useRouter();
  const [showRegister, setShowRegister] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Si el usuario presiona "Sign up", muestra la pantalla de registro
  if (showRegister) {
    return <RegisterScreen onClose={() => setShowRegister(false)} />;
  }

  const handleLogin = () => {
    const validUsers = [
      { email: 'admin@gmail.com', password: '123456' },
    ];

    const userFound = validUsers.find(
      u => u.email === email && u.password === password
    );

    if (userFound) {
      setError('');
      router.replace('./ServicesPortfolioScreen'); 
    } else {
      setError('Credenciales incorrectas o usuario no existe.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <TextInput
        style={styles.input}
        placeholder="admin@gmail.com"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="**********"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setShowRegister(true)}>
        <Text style={styles.link}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent:"center",
  alignItems: "center",
  backgroundColor: "#f0f0f0"
},
title:{
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 20
},
input:{
  width: "80%",
  marginVertical:10,
  backgroundColor: "White",
  borderRadius: 5,
  borderWidth:1,
  borderColor: "#ccc"
},
button:{
  marginTop:20,
  backgroundColor:"#007bff",
  padding: 10,
  borderRadius: 5,
  width: "80%",
  alignItems: "center"
},
buttonText:{
  color:"white",
  fontSize: 14,
  fontWeight: "bold"
},

link: {
marginTop:10,
color: "blue",
textDecorationLine: "underline"

},

error: {
  color: 'red',
  marginTop: 10,
  fontWeight: 'bold'
},


});

import { useNavigation } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ImageBackground } from "react-native";
import RegisterScreen from "./RegisterScreen";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [ShowRegister, setShowRegister] = useState(false);

  // Estado para email, contraseña y mensaje de error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Oculta el header de navegación
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Si el usuario presiona "Sign up", muestra la pantalla de registro
  if (ShowRegister) {
    return <RegisterScreen onClose={() => setShowRegister(false)} />
  }

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    // Simulación de usuarios válidos (puedes reemplazarlo por llamada a API)
    const validUsers = [
      { email: 'admin@gmail.com', password: '123456' },
    ];

    // Verifica si el usuario existe y la contraseña coincide
    const userFound = validUsers.find(
      u => u.email === email && u.password === password
    );

    if (userFound) {
      setError(''); // Limpia errores anteriores
      Alert.alert('Bienvenido', 'Inicio de sesión exitoso');
      // Puedes navegar a otra pantalla si lo deseas, ejemplo:
      // navigation.navigate('Home');
    } else {
      setError('Credenciales incorrectas o usuario no existe.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      {/* Campo de correo electrónico */}
      <TextInput
        style={styles.input}
        placeholder="admin@gmail.com"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo de contraseña */}
      <TextInput
        style={styles.input}
        placeholder="**********"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Muestra el error si existe */}
      {error !== '' && <Text style={styles.error}>{error}</Text>}

      {/* Botón de inicio de sesión */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Link para ir al registro */}
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
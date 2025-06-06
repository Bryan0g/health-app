import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const services = [
  {
    id: 1,
    name: 'Consulta General',
    image: require('../../assets/consulta.png'),
    description: 'Atención médica general para todas las edades.'
  },
  {
    id: 2,
    name: 'Pediatría',
    image: require('../../assets/pediatria.png'),
    description: 'Especialistas en el cuidado de niños y adolescentes.'
  },
  {
    id: 3,
    name: 'Ginecología',
    image: require('../../assets/ginecologia.png'),
    description: 'Salud femenina y planificación familiar.'
  }
];

export default function ServicesPortfolioScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Portafolio de Servicios</Text>
      {services.map(service => (
        <View key={service.id} style={styles.card}>
          <Image source={service.image} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.description}>{service.description}</Text>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="information-circle-outline" size={20} color="white" />
              <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100
  },
  info: {
    flex: 1,
    padding: 10
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600'
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    backgroundColor: '#4CAF50',
    padding: 6,
    borderRadius: 6
  },
  buttonText: {
    color: 'white',
    marginLeft: 6
  }
});

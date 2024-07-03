import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from './reducers/counterReducer'; // Assurez-vous que le chemin est correct
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ count, increment, decrement }) => {

  const [fontsLoaded] = useFonts({
    Urbanist: require('./assets/Urbanist-VariableFont_wght.ttf'),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  }

  const handleNavigate = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.classicText}>Edifices</Text>
      <Text style={styles.secondText}>React Navigation + Redux</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={decrement} style={styles.button}>
          <Text style={styles.textButton}>-</Text>
        </Pressable>
        <Text style={styles.countText}>Compteur: {count}</Text>
        <Pressable onPress={increment} style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>
      <Pressable onPress={handleNavigate} style={styles.buttonLink}>
        <Text style={styles.textButton}>Go to Details</Text>
      </Pressable>
      <View style={styles.circle}></View>
      <View style={styles.outlineCircle}></View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    position: 'relative',
  },
  classicText: {
    padding: 20,
    fontSize: 40,
    fontFamily: 'Urbanist',
  },
  secondText: {
    paddingTop: 0,
    paddingBottom: 30,
    paddingHorizontal: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  buttonLink: {
    backgroundColor: '#3a38d5',
    borderRadius: 15,
  },
  textButton: {
    color: 'white',
    padding: 10,
    fontSize: 20,
  },
  circle: {
    width: 250,
    height: 250,
    backgroundColor: '#ffc400',
    borderRadius: 125,
    position: 'absolute',
    bottom: -100,
    right: -100,
  },
  outlineCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 25,
    borderColor: '#fcbfff',
    position: 'absolute',
    top: 20,
    left: -150,
  },
  countText: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3a38d5',
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 2,
    fontSize: 25
  },
};

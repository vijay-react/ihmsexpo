// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// class MyBackButton extends React.Component {
//   render() {
//     // Get it from props
//     const { navigation } = this.props;
//   }
// }

// // Wrap and export
// export default function(props) {
//   const navigation = useNavigation();

//   return <MyBackButton {...props} navigation={navigation} />;
// }
// export default App;
import React, { Component } from "react";
import { useState } from "react";
import {
 View,
 Text,
 TextInput,
 StyleSheet,
 TouchableOpacity,
 ScrollView,
 AppRegistry,
 Switch,
} from "react-native";

import { Actions } from "react-native-router-flux";
import { Router, Stack, Scene } from "react-native-router-flux";

import DateTimePicker from "@react-native-community/datetimepicker";
import { createAppContainer } from "react-navigation";


import { reactnavigationdrawer } from "@react-navigation/drawer";


import Appointments from "./Components/Appointments";

const App = () => {
  return <Appointments/>;
};
export default App;
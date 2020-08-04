
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

// import DateTimePicker from "@react-native-community/datetimepicker";
// import { createAppContainer } from "react-navigation";

import Appointments from "./Components/Appointments";

const App = () => {
  return <Appointments/>;
};
export default App;
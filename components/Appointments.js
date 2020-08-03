import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground,TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from "react-navigation-stack";
import { DataTable } from 'react-native-paper';
import { TextInput } from "react-native-gesture-handler";
import { Octicons,MaterialIcons,AntDesign} from "@expo/vector-icons";
import GlobalFont from 'react-native-global-font';
let backgroundImage = require("./splashLogo.png");
import { createSwitchNavigator, createAppContainer } from "react-navigation";
// export default class Appointements extends Component {
//   // render() {
  //   return <AppContainer />; //It is used to render all the screens in SideMenu.js
  // }
 
  // import * as React from 'react';
  // import { Text, View, StyleSheet, Image } from 'react-native';
  // import { Constants } from 'expo';
  
  export default class App extends React.Component {
    
  componentDidMount() {
    let fontName = 'normal'
    GlobalFont.applyGlobal(fontName)
}
  render() {
    
    return (
      
        <ImageBackground source={backgroundImage} style={{ flex: 1,width: '100%', height: '100%'}}>
       
         <View  style={styles.container}>
              {/* <View style={styles.box}>
              <View style={styles.boxItem}>
                  <View style={styles.boxItemInnar}>
                  <Text  style={{ fontSize: 21, marginLeft: 40}}>Waiting room{'\n'} capacity</Text>
                  <Text
               style={{
                 fontSize: 34,
                 borderRadius: 50,
                 backgroundColor: "white",
                 marginLeft: 80,
                 marginVertical: 10,
               }}
             >
               12
             </Text>
                  </View></View>
                <View style={styles.boxItem}>
                  <View style={styles.boxItemInnar}>
                  <View>
               <Text style={{ fontSize: 30, marginLeft: 30 }}>
                 Doctor available
               </Text>
               <Text
               style={{
                 fontSize: 34,
                 borderRadius: 50,
                 backgroundColor: "white",
                 marginLeft: 80,
                 marginVertical: 10,
               }}
             >
                 2
               </Text>
                  </View>
           </View>
           <View
             style={{
               flexDirection: "row",

               borderRadius: 10,
             }}
           >
                  </View>
                </View>

               <View style={styles.boxItem}>
                  <View style={styles.boxItemInnar}>
                  <View>
               <Text style={{ fontSize: 24, marginLeft: 30 }}>
                 Total Patients
               </Text>
               <Text
               style={{
                 fontSize: 34,
                 borderRadius: 50,
                 backgroundColor: "white",
                 marginLeft: 80,
                 marginVertical: 10,
               }}
             >
                 20
               </Text>

               <TouchableOpacity onPress={() => alert("Current Token")}>
                 <Text
                   style={{
                     borderColor: "black",
                     borderWidth: 1,
                     fontSize: 14,
                     width: 150,
                     textAlign: "center",
                     borderRadius: 10,
                     padding: 6,
                     marginHorizontal: 18,
                     marginTop:-15,
                     marginBottom:1,
                     color: "black",
                   }}
                 >
                   Current Token 12
                 </Text>
               </TouchableOpacity>
             </View>
            
                  </View>
                </View>
                <View style={styles.boxItem}>
                  <View style={styles.boxItemInnar}>
                  <View>
               <Text style={{ fontSize: 24, marginLeft: 30 }}>
                Doctors Ready
               </Text>
               <Text
               style={{
                 fontSize: 34,
                 borderRadius: 50,
                 backgroundColor: "white",
                 marginLeft: 80,
                 marginVertical: 10,
               }}
             >
                 3
               </Text>
               <TouchableOpacity onPress={() => alert("Current Token")}>
                 <Text
                   style={{
                     borderColor: "black",
                     borderWidth: 1,
                     fontSize: 14,
                     width: 150,
                     textAlign: "center",
                     borderRadius: 10,
                     padding: 6,
                     marginVertical: 5,
                     marginHorizontal: 14,
                     color: "black",
                   }}
                 >
                   Next Token
                 </Text>
               </TouchableOpacity>
               </View>
               </View>
               </View>
              
             </View> */}
          </View>
                <View style={styles.center}>
                    <View style={styles.centerItemInner}>
                   <Text style={styles.centerText}>Consultations{'\n'}Completed</Text>
                   <Text styles={styles.boxText}><Text
               style={{
                 fontSize: 14,
                 alignSelf: "center",
                 borderWidth: 1,
                 borderColor: "black",
                 borderRadius: 50,
                 backgroundColor: "white",
                 width: 50,
                 paddingLeft: 10,
                 marginVertical: 10,
                 fontWeight: "700",
               }}
             >
               12
             </Text></Text>
                   </View>
                </View>
                <View style={styles.center}>
                    <View style={styles.centerItemInner}>
                   <Text style={styles.centerText}>Patients {'\n'}Remaining</Text>
                   <Text styles={styles.boxText}><Text
               style={{
                 flex:1,
                 
                 fontSize: 14,
                 alignSelf: "center",
                 borderWidth: 1,
                 borderColor: "black",
                 borderRadius: 50,
                 backgroundColor: "white",
                 width: 50,
                 paddingLeft: 10,
                 marginVertical: 10,
                 fontWeight: "700",
               }}
             >
               12
             </Text></Text>
                   </View>
                </View>
                {/* <View style={styles.center}>
                    <View style={styles.centerItemInner}>
                   <Text style={styles.boxText}>Patients {'\n'}Remaining</Text>
                   <Text styles={styles.boxText}><Text
               style={{
                 fontSize: 14,
                 alignSelf: "center",
                 borderWidth: 1,
                 borderColor: "black",
                 borderRadius: 50,
                 backgroundColor: "white",
                 width: 50,
                 paddingLeft: 10,
                 marginVertical: 10,
                 fontWeight: "700",
               }}
             >
               08
             </Text></Text>
                   </View>
                </View> */}
              <View style={styles.below}>
              <View
           style={{
             flexDirection: "row",
             marginVertical: 10,
             marginLeft: 150,
           }}
         >
           <MaterialIcons
             onPress={() => alert("Searching Please Wait")}
             name="search"
             size={24}
             color="black"
             style={{ padding: 3 }}
           />
           <TextInput
             keyboardType={"default"}
             style={{
               borderWidth: 1,
               borderColor: "black",
               width: 150,
               borderRadius: 10,
             }}
           ></TextInput>
         </View>
            <DataTable>
            <DataTable.Row>
              <DataTable.Cell>Patient Name</DataTable.Cell>
              <DataTable.Cell numeric>34</DataTable.Cell>
            </DataTable.Row>
        
            <DataTable.Row>
              <DataTable.Cell>Patient Name</DataTable.Cell>
              <DataTable.Cell numeric>34</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Patient Name</DataTable.Cell>
              <DataTable.Cell numeric>34</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Patient Name</DataTable.Cell>
              <DataTable.Cell numeric>34</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Patient Name</DataTable.Cell>
              <DataTable.Cell numeric>34</DataTable.Cell>
            </DataTable.Row>
            
          </DataTable>
           
       </View>
          
      
        </ImageBackground>
    );
  }
}

// const AppointementStackNavigator = createStackNavigator(
//   {
//     Appointements: Appointement,
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         headerLeft: (
//           <Icon
//             style={{ paddingLeft: 10 }}
//             onPress={() => navigation.openDrawer()}
//             name="md-menu"
//             size={30}
//           />
//         ),
//         headerRight: (
//           <View>
//             <MaterialIcons name="mail-outline" size={30} color="black" />
//           </View>
//         ),
//       };
//     },
//   }
//  );
//  const AppSwitchNavigator = createSwitchNavigator({
//   Dashboard: { screen: AppDrawerNavigator },
//   Appointment: { screen: Appointement },
// });

// const AppContainer = createAppContainer(AppSwitchNavigator);
const styles = StyleSheet.create({
  container: {
        flex:1,
        flexDirection:'row',
        flexWrap:"wrap"
  },
   box:{
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        height:'75%',
        backgroundColor:"#48b4e0",
        flexDirection:'row',
        flexWrap:"wrap",
        padding:1,
        borderRadius:8
    },
    boxItem:{
        width:'50%',
        height:'50%',
        padding:1,
        },

   boxItemInnar:{
      flex:1,
     backgroundColor:"#fff",
   },
    center:{
    marginLeft:15,
   height:'10%',
    marginTop:20,
   flexDirection:'column',
   padding:5,
   borderRadius:8
   },
    centerItemInner:{
      // flex:1,
      justifyContent:"flex-start",
      alignItems:'flex-start',

      padding:10,
      fontSize:40,
      width: 100, 
      height: 100, 
      backgroundColor: '#FFFFFF'
     },
     centerText:{
       width:'100%',
       height:"80%",
       padding:5,
       justifyContent:"center",
       alignItems:'center',
       backgroundColor: '#FFFFFF'
     },
    
  below:{
    flex:1,
    flexDirection:'column',
   padding:5,
   borderRadius:8
  }

});

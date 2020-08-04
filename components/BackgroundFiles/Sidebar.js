// import PropTypes from 'prop-types';
// import React, {Component} from 'react';
// // import styles from './SideMenu.style';
// import {NavigationActions} from 'react-navigation';
// import {ScrollView, Text, View} from 'react-native';
// import { StackNavigator } from 'react-navigation';

// class Sidebar extends Component {
//   navigateToScreen = (route) => () => {
//     const navigateAction = NavigationActions.navigate({
//       routeName: route
//     });
//     this.props.navigation.dispatch(navigateAction);
//   }

//   render () {
//     return (
//       <View style={styles.container}>
//         <ScrollView>
//           <View>
            
//             <View style={styles.navSectionStyle}>
//               <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ClinicProfile')}>
//               ClinicProfile
//               </Text>
//             </View>
          
            
//             <View style={styles.navSectionStyle}>
//               <Text style={styles.navItemStyle} onPress={this.navigateToScreen('MessageCenter')}>
//               MessageCenter
//               </Text>
//               </View>

//               <View style={styles.navSectionStyle}>
//               <Text style={styles.navItemStyle} onPress={this.navigateToScreen('DoctorList')}>
//               DoctorList
//               </Text>
//             </View>            
          
           
//             <View style={styles.navSectionStyle}>
//               <Text style={styles.navItemStyle} onPress={this.navigateToScreen('DoctorProfile')}>
//               DoctorProfile
//               </Text>
//             </View>

//             <View style={styles.navSectionStyle}>
//               <Text style={styles.navItemStyle} onPress={this.navigateToScreen('NewAppointment')}>
//               NewAppointment
//               </Text>
//             </View>

//             <View style={styles.navSectionStyle}>
//               <Text style={styles.navItemStyle} onPress={this.navigateToScreen('DoctorDashboard')}>
//               DoctorDashboard
//               </Text>
//             </View>

//           </View>
//         </ScrollView>
//         {/* <View style={styles.footerContainer}>
//           <Text>This is my fixed footer</Text>
//         </View> */}
//       </View>
//     );
//   }
// }

// Sidebar.propTypes = {
//   navigation: PropTypes.object
// };

// export default Sidebar;
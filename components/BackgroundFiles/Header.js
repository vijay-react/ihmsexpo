import * as React from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';
import menu from "../../assets/Menu.png"

// function LogoTitle() {
//     return (
//       <Image
//         style={{ width: 50, height: 50 }}
//         source={require('../../assets/Menu.png')}
//       />
//     );
//   }

export default class Header extends React.Component {

    render(){
        return(
            <View  style={styles.container}>
              <View style={styles.header}>
                  <View style={styles.Image}>
              <Image
        style={{ width: 20, height: 20,marginRight:250
    }}
        source={require('../../assets/Menu.png')}
      />
      </View>
                <Text >Header</Text>
              </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
          flexDirection:'row',
          flexWrap:"wrap",
          aligmItems:'center',
        justifyContent:'center'
    },
    header:{
        width:'100%',
        height:'100%',
        aligmItems:'center',
        justifyContent:'center',
        backgroundColor:'#00FFFF'
    },
    Image:{
        aligmItems:'flex-start',
        justifyContent:'flex-start',
        backgroundColor:'#00FFFF'
    }
})
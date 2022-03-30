import React from 'react';
import { TouchableOpacity,Text } from 'react-native';

export default class SignOut extends React.Component {
  
 
  render() {
    return (
      <TouchableOpacity
      style={{backgroundColor:'#FF4DFF',
      justifyContent: 'center',
      alignItems: 'center',
      width:100,height:35,
      borderRadius:30,}}
      onPress={()=>this.props.navigation.navigate('Auth')}
      >
          <Text style={{color:'#ffffff'}}>Sign Out</Text>
      </TouchableOpacity>
    );
  }
}


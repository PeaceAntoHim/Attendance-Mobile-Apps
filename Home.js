import React from 'react';
import { Text, View, TouchableHighlight ,StatusBar,StyleSheet,Image} from 'react-native';
import { connect } from 'react-redux';
import SignOut from './SignOut'

class Home extends React.Component {

render() {
        return (
         
          <View style={styles.container}>
            <View style={{flexDirection:'row', marginBottom:20}}>
          <View style={{flex :1,paddingLeft:20}} >
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('AddStudent')}>
                     <View><View style={{justifyContent:'center',alignSelf:'center',backgroundColor:'#33FFFF',height:80,width:80,borderRadius:80}}><Image style={{width:50,height:50, alignSelf : 'center'}} source={{uri: 'https://img.icons8.com/dotty/80/000000/student-registration.png'}}/></View><Text style={{alignSelf:'center'}}>Add Student</Text></View>
              </TouchableHighlight>
          </View>
          <View style={{flex:1,paddingRight:20}} >
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('Showstudents')}>
                      <View><View style={{justifyContent:'center',alignSelf:'center',backgroundColor:'#FF99FF',height:80,width:80,borderRadius:80}}><Image style={{width:50,height:50, alignSelf : 'center'}} source = {{uri : 'https://img.icons8.com/material-outlined/96/000000/example.png'}}/></View><Text style={{alignSelf:'center'}}>Mark Attendance</Text></View>
            </TouchableHighlight>
          </View></View>
          <View style={{flexDirection:'row'}}>
          <View style={{flex:1,paddingLeft:20}} >
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('ViewPresent')}>
                      <View><View style={{justifyContent:'center',alignSelf:'center',backgroundColor:'#99FF99',height:80,width:80,borderRadius:80}}><Image style={{width:50,height:50, alignSelf : 'center'}} source = {{uri : 'https://img.icons8.com/material-outlined/96/000000/checked.png'}}/></View><Text style={{alignSelf:'center'}}>View Attendance</Text></View>
            </TouchableHighlight>
            </View>
          <View style={{flex:1,paddingRight:20}} >
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('ViewStudents')}>
                      <View><View style={{justifyContent:'center',alignSelf:'center',backgroundColor:'#FFFF66',height:80,width:80,borderRadius:80}}><Image style={{width:50,height:50, alignSelf : 'center'}} source = {{uri : 'https://img.icons8.com/wired/96/000000/students.png'}}/></View><Text style={{alignSelf:'center'}}>View Students</Text></View>
            </TouchableHighlight>
            </View>
            </View>
     
              
          </View>
        )
    }
}




export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center',
      }
   
})

















import React from 'react';
import { Text, View, TouchableHighlight ,StyleSheet,Modal,Image,Picker} from 'react-native';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import {AntDesign} from '@expo/vector-icons'
import CameraExample from './Camera'
import ImaagePickerExample from './ImagePicker'
import {addpic} from './redux/actions/action'
import Loader from './assets/Loader.gif'


import firebase from 'firebase';
require("firebase/firestore");
class AddStudent extends React.Component {
    state = {
       fullName : '',
        rollNo : '',
        section : 'Section A'
       }

     
    
       render(){
           return(
           <View style={styles.modalcontainer}>
        <View style={{marginBottom:20}}>
          {(this.props.imageUri === '')
          ?(<View style={{flexDirection:'row',justifyContent:'space-evenly'}}><View  style={{backgroundColor:'black', height:80,width:80,justifyContent:'center',borderRadius: 80,alignItems:'center', marginRight:10}}><AntDesign name='camera' size={50} color ='white' onPress={()=>this.props.navigation.navigate('CameraExample')}/></View><ImaagePickerExample/></View>)
           :   <Image style={{width:150,height:150,borderRadius:150}} source ={{uri:this.props.imageUri}}/>}
        </View>
        {/* <Text>{JSON.stringify(this.props.imageUri)}</Text> */}
            <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>
              <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/material-two-tone/64/000000/numbers-input-form.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Roll No#"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(rollNo) => this.setState({rollNo})}/>
        </View>
        <View style = {{marginBottom:20,}}>
        <Picker
            selectedValue={this.state.section}
                style={{height: 45, width: 250, backgroundColor: 'white', alignSelf:'center' ,borderRadius :50}}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({section: itemValue})
                }>
  <Picker.Item label="Section A" value="Section A" />
  <Picker.Item label="Section B" value="Section B" />
</Picker></View>
            
            
<View style={{flexDirection:'row', 
        justifyContent: 'space-around',}}>
              <TouchableHighlight style={[styles.buttonContainer, styles.signupButton,{marginRight:10}]}
                onPress={()=>{
                  this.props.addStudent(this.state.fullName,this.state.rollNo,this.state.section,this.props.imageUri,this.props.navigation)
                }}>
                <Text>Add Student</Text>
              </TouchableHighlight>
              <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}
                onPress={() => {
                 this.props.navigation.navigate('Home');
                }}>
                <Text>Cancel</Text>
              </TouchableHighlight>
</View>
{(this.props.loader === true)?(
                      <View style={{alignItems:'center'}}>
                      <Image source={Loader} style={{height:50,width:50,alignSelf:'center'}}/>
                    </View>): null
        }
          </View>
           )
            }
        }





function mapStateToProps(state){
    return({
imageUri : state.basicInfo.uri,
loader : state.basicInfo.loader
    })
}
function mapDispatchToProps(dispatch){
            return({
                addStudent :(fullName , rollNo , section,url,nav)=> {
                  
                    dispatch(addpic(fullName , rollNo , section,url,nav))}
            })

        }
export default connect(mapStateToProps,mapDispatchToProps)(AddStudent)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b5ec',
      },
    modalcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:100,
        borderRadius:30,
      },
      inputContainer: {
        borderColor: 'black',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
      signupButton: {
        backgroundColor: "#FF4DFF",
      },
      signUpText: {
        color: 'white',
      }
})



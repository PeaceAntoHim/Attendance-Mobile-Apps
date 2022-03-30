import React from 'react';
import {signin} from './redux/actions/action'
import { connect } from 'react-redux'
import Loader from './assets/Loader.gif'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';
  

class Signup extends React.Component {
    goToSignup(){
        this.props.navigation.navigate('Signup')
    }
    
    signin(){
        const {email,password} = this.state
        this.props.signinn(email,password,this.props.navigation)
      

    }
    state = {
        
        email   : 'A@a.com',
        password: 'mmmmmm',
      }
    render() {
        return (
          
            <View style={styles.container}>
              <Text style={{fontSize:32, fontWeight:'bold',marginBottom:10}}>Sign In</Text>
     <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/officel/30/000000/email.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.signin.bind(this)}>
          <Text style={styles.signUpText}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight
        onPress = {()=>this.goToSignup()}
        ><Text>New here? Signup!</Text></TouchableHighlight>
        {(this.props.loader === true)?(
                      <View style={{alignItems:'center'}}>
                      <Image source={Loader} style={{height:50,width:50,alignSelf:'center'}}/>
                    </View>): null
        }
        {(this.props.error !== '')?(
                      <View style={{alignItems:'center'}}>
                      <Text style={{alignSelf:'center'}}>{this.props.error}</Text>
                    </View>): null
        }
        
      </View>
        )
    }
}

function mapStateToProps(states) {
    return ({
        loader: states.basicInfo.loader,
        error: states.basicInfo.error
    })
}
function mapDispatchToProps(dispatch) {
    return ({
        signinn: (email,pass,nav) => {
                dispatch(signin(email,pass,nav))
            }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00b5ec',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    signupButton: {
      backgroundColor: "#FF4DFF",
    },
    signUpText: {
      color: 'white',
    }
  });
   
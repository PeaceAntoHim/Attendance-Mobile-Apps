import React from 'react';
import { Text, View, FlatList ,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import Mark from './Mark'

class Showstudents extends React.Component {
    show() {
        this.props.navigation.navigate('Showstudents')
    }
   
    render() {
        
        return (
            <View style={{ flex: 1 }}>
               {/* {alert(this.props.allUsers)} */}
               
                <FlatList
                data = {this.props.allUsers}
                renderItem = {({item})=><Mark item = {item}/>}
                />                  
            </View>
        )
    }
}

function mapStateToProps(states) {
    return ({
        allUsers: states.basicInfo.allStudents
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Showstudents)
const styles = StyleSheet.create({
    
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
})

















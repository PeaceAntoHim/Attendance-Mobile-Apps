import React from 'react';
import { Text, View, FlatList ,StatusBar,StyleSheet,Image} from 'react-native';
import noPhotoAvailable from './assets/noPhotoAvailable.png'
import { connect } from 'react-redux';

class ViewPresent extends React.Component {

render() {
        return (
         
          <View style={styles.container}>
          
          <FlatList
                data = {this.props.present}
                renderItem = {({item})=>( <View style={{ flex: 1 }}>
                
                   <View  style={{ backgroundColor:'#F5F5F5',flexDirection:'row', borderColor :'black', borderWidth: 1 , flexWrap : 'wrap', padding: 2,justifyContent : 'space-between' }} >
                <View style = {{flexDirection : 'row', }}>
                        <View style={{justifyContent:'center'}} >
                            {(item.url !== undefined && item.url !== null && item.url !== '')
                        ?<Image style={{width: 80,height:80, alignSelf:'center', borderRadius:80}} source={{uri:item.url}}/>
                    :<Image style={{width: 80,height:80, alignSelf:'center', borderRadius:80}} source={noPhotoAvailable}/>}
                        </View>
                        <View style={{padding:2, marginLeft:10}}>
                    <Text style={{ fontSize:22 }}>{item.fullName}</Text>
                    <Text style={{ fontSize:17 }}>{item.rollNo}</Text>
                    <Text style={{ fontSize:17,fontStyle:'italic',color:'blue' }}>{item.section}</Text>
                    </View></View>
                   </View>
                </View>)}
                />                  
          </View>
        )
    }
}


function mapStateToProps(state){
    return({
        present: state.basicInfo.allStudents
    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewPresent);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5F5F5',
        // backgroundColor: 'powderblue',
        
      },
     
   
})

















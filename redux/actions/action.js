

import firebase from 'firebase';
require("firebase/firestore");
import {ToastAndroid} from 'react-native';





var firebaseConfig = {
    apiKey: "AIzaSyAWCXXysdAPQoohF4yh5FLgJ_o__W7-vsM",
    authDomain: "attendance-app1.firebaseapp.com",
    databaseURL: "https://attendance-app1.firebaseio.com",
    projectId: "attendance-app1",
    storageBucket: "attendance-app1.appspot.com",
    messagingSenderId: "183829783422",
    appId: "1:183829783422:web:99966dd5efb86ce9"
  };
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export function signup(name , email, password,nav) {
    return (dispatch) => {
        console.log(email, password);
        dispatch({ type: 'CHANGE_LOADER' })
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                db.collection("users").add({
                    name,
                    email,
                    uid : user.user.uid,
                }).then(function (docRef) {
                    dispatch({ type: 'LOGGEDIN_USER', payload: { email: user.user.email, uid: user.user.uid , name} });
                    dispatch(getStudents());
                    dispatch(getattendance());
                    dispatch({ type: 'CHANGE_LOADER' });
                   nav.navigate('App')
                })
            })
        }
}



export function signin(email, password,nav) {
    return (dispatch) => {
        
        dispatch({ type: 'CHANGE_LOADER' })
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            db.collection("users").where("uid", "==", user.user.uid)
            .get()
                        .then(function (userSnapshot) {
                            userSnapshot.forEach(function (userDoc) {
                                dispatch({ type: 'LOGGEDIN_USER', payload: { email: userDoc.data().email, uid: userDoc.data().uid , name:userDoc.data().name} });
                                dispatch({ type: 'CHANGE_LOADER' });
                               
                                nav.navigate('App')
                                dispatch(getattendance());
                                dispatch(getStudents());
                                
                            });
                        })
            })
    }
}




var allStudents =[]
function getStudents(){
return(dispatch) =>{
 
    
   firebase.firestore().collection('students').get().then(snapshot => {
       snapshot.docs.forEach(doc => {
        
         const comment = doc.data()
         allStudents.push(comment)
        })
        
        dispatch({type:'LIST_USERS' , payload:allStudents})
        allStudents =[]
    })
    console.log("all",allStudents)
   console.log("dispatched")
}
}
var present =[]
function getattendance(){
    return(dispatch) =>{
     //   alert('aya')
    

     var date  = new Date()
     date = date.toDateString()
     db.collection("attendance").where("date", "==", date)
     .get()
                 .then(function (userSnapshot) {
                     userSnapshot.forEach(function (doc) {
                         const comment = doc.data()
         present.push(comment)
                         
                     });
                      dispatch({type:'PRESENT' , payload:present})
                present =[]
                 })
 console.log("all",present)
   console.log("dispatched")


   
}
}

export function mark(fullName,rollNo,section,url){
        return(dispatch)=>{
            var date  = new Date()
            date = date.toDateString()
             db.collection("attendance").add({
                 fullName,
                 section,
                   date,
                   rollNo,
                url
               })
               .then(function (docRef) {   
                   dispatch(getattendance())
                    alert(`Attendance of ${fullName} marked for ${date}`)

                 });
                
             }
             
        }


 export function addpic(fullName,rollNo,section,uri,nav){

            return async (dispatch)=>    { 
                dispatch({ type: 'CHANGE_LOADER' });
                               
                console.log("uploadAsFile", uri)
                 const response = await fetch(uri);
                 const blob = await response.blob();
               
                 var metadata = {
                   contentType: 'image/jpeg',
                 };
               
                 let name = new Date().getTime() + "-media.jpg"
                 const stref = firebase
                   .storage()
                   .ref()
                   .child('assets/' + name)
               
                 stref.put(blob, metadata)
               .then(function(imageSnapshot) {
                 imageSnapshot.ref.getDownloadURL()
                 .then((downloadURL)=>{
                   console.log('File available at', downloadURL);
                   
                  
                         firebase.firestore().collection("students").add({
                             fullName,
                             rollNo,
                             section,
                             url:downloadURL,
                             
                             
                         }).then(function (docRef) {
                             dispatch({ type: 'CHANGE_LOADER' });
                             
                            ToastAndroid.show('Student added', ToastAndroid.SHORT);
                             
                             nav.navigate('Home')
                             dispatch(getStudents());
                             dispatch({type:'URI', payload:''})
                            })
                            .catch((e)=>{
                                dispatch({type:'URI', payload:''})
                                dispatch({ type: 'CHANGE_LOADER' });
                                dispatch({type:'Error', payload:e})
                                
                         })
                     })
              })}
             }
       
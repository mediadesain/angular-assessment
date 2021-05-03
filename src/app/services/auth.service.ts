

import { Injectable } from '@angular/core';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

@Injectable()
export class AuthService {
  active:boolean = false;
  data:any = "";
  message:any = "";
  constructor() {
    this.getDataAuth()
  }

  getDataAuth(){
    firebase.auth().onAuthStateChanged( (auth) => {
      if(auth){
        firebase.database().ref('/users').orderByChild("uid").equalTo(auth.uid).on('value', 
          (snapshot) => {
            this.data = Object.values(snapshot.val())[0]
            this.active = true;
          },
          (error) => console.log('error')
        );
      }
    });
  };

  updateDataAuth(value:any){
    value['dateupdate'] = new Date().getTime();
    firebase.database().ref('users/' + value.uid).set(value);
  }
  
  signIn(value:any){
    firebase.auth().signInWithEmailAndPassword(value.email,value.password)
      .then( (auth) => {
        firebase.database().ref('users/'+auth.user?.uid).update({"datelogin": new Date().getTime()});
        this.message = 'Signin success';
      })
      .catch( (error) => this.message = error.message);
  };

  signOut(){
    firebase.auth().signOut()
      .then( () => {this.active = false;this.message = 'SignOut Success'})
      .catch( (error) => this.message = error.message);
  };

}
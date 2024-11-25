// Import the functions you need from the SDKs you need
import { initializeApp }  from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";;

import{ getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, sendPasswordResetEmail,  signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARgr3w0fxHEiQAhn6YwB-cCVytNWnoQzE",
  authDomain: "auth-firebase-93579.firebaseapp.com",
  databaseURL: "https://auth-firebase-93579-default-rtdb.firebaseio.com",
  projectId: "auth-firebase-93579",
  storageBucket: "auth-firebase-93579.firebasestorage.app",
  messagingSenderId: "669165453851",
  appId: "1:669165453851:web:f1417b737439e86f2eaebe"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const buttonSignup =  document.getElementById("button_signup");
const buttonSignin =  document.getElementById("button_signin");


buttonSignup.addEventListener('click', (e)=>{
    let name = document.getElementById("name").value;
    let nohp = document.getElementById("nohp").value;
    let emailSignup = document.getElementById("email_signup").value;
    let passwordSignup= document.getElementById("psw_signup").value;



    createUserWithEmailAndPassword(auth, emailSignup, passwordSignup, ) .then(
      (userCredential) => {
        // Signed up

        const user = userCredential.user;
        set(ref(database, "users/" +user.uid), {
          name: name,
          nohp: nohp,
          email: emailSignup,
          password: passwordSignup,
        
        });
      })
      .then(() => {
        alert("account created, you can login");
      })
      .catch((error) => {
        alert(error);
        
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    

});
buttonSignin.addEventListener("click", (e)=>{
  let emailSignin = document.getElementById("email_signin").value;
  let passwordSignin = document.getElementById("psw_signin").value;
signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    location.href = "http://127.0.0.1:5501/Sliding-Sign-In-Sign-Up-master/adim.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('wrong password');
  });

});


//reset
const reset = Document.getElementById("reset");
reset.addEventListener("click", function(event){
event.preventDefault()
const email = document.getElementById("email").value;
sendPasswordResetEmail(auth, email)
.then(() => {
  // Password reset email sent!
  // ..
alert("email sent ")
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
  alert('wrong password')
});

})

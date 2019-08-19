var firebaseConfig = {
    apiKey: "AIzaSyChsSrkugmaRLygKR8IzGGFjT1EiaJmfFs",
    authDomain: "travel-website-2fd73.firebaseapp.com",
    databaseURL: "https://travel-website-2fd73.firebaseio.com",
    projectId: "travel-website-2fd73",
    storageBucket: "",
    messagingSenderId: "725745572723",
    appId: "1:725745572723:web:1ae8d99d1f1da9e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  //Reference message collection

  //var messageReference = firebase.database().ref("messages");
  var reference =  firebase.database().ref("message");

document.querySelector("#contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = getInputValues("name");
    let email = getInputValues("email");
    let phone = getInputValues("phone");
    let msg = getInputValues("msg");

    //Save message to Firebase
    saveMsgFirebase(name, email, phone, msg);

}

function getInputValues(id) {
    return document.getElementById(id).value;
}

function saveMsgFirebase(name, email, phone, msg) {
    let newMsgRef = reference.push();
    newMsgRef.set({
        name: name,
        email: email,
        phone: phone,
        msg: msg
    })
}
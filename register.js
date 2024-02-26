  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDOOjBSvAYedwquiyp0xtu_SlhKn4Pynpc",
    authDomain: "dennis-firebase-f2a41.firebaseapp.com",
    databaseURL: "https://dennis-firebase-f2a41-default-rtdb.firebaseio.com",
    projectId: "dennis-firebase-f2a41",
    storageBucket: "dennis-firebase-f2a41.appspot.com",
    messagingSenderId: "22247350396",
    appId: "1:22247350396:web:4173a4b96e322acd1e29f9",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


  const submit = document.getElementById('submit');

  submit.addEventListener("click",function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Success!");
      window.location.href = "products.htm"
      const user = userCredential.user;
    console.log("User signed up!",user)
  })
  .catch((error) => {
    alert("Failed to Sign In");
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signed up!",errorCode, errorMessage);
  });
});

  

document.addEventListener('DOMContentLoaded', function() {

      // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyAiFAf5DgSPxmofw0kQRZNi_01ouvHwQKs",
      authDomain: "digital-design-a971e.firebaseapp.com",
      projectId: "digital-design-a971e",
      storageBucket: "digital-design-a971e.appspot.com",
      messagingSenderId: "973474266724",
      appId: "1:973474266724:web:7fb6421236f8969165e971"
    };
      firebase.initializeApp(firebaseConfig);
    
      // Get a reference to the sign-up button
      var signupButton = document.querySelector('#button-signup');
      var loginButton = this.querySelector('#button-login')
      var database = firebase.database();
      if (signupButton) {
    
        // Handle sign-up button clicks
        signupButton.addEventListener('click', function(event) {
          event.preventDefault(); // prevent the form from submitting
          console.log("the button clicked")
          // Get user info
          var name = document.querySelector('#nameS').value;
          var email = document.querySelector('#emailS').value;
          var password = document.querySelector('#passwordS').value;
    var school = ""
          // Sign up the user with Firebase Authentication
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(function(userCredential) {
            // Signed in
            var user = userCredential.user;  
            window.location.href = "index.html";
            // Update user display name
          })
          .catch(function(error) {
            // Handle errors
            console.error(error);
            alert(error)
          });

        });
    
      }

  if (loginButton){
    loginButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      console.log("button was clicked")
      var emailL = document.querySelector("#emailL").value;
      var passwordL = document.querySelector("#passwordL").value;
      console.log(document.querySelector("#emailL").value)

      firebase.auth().signInWithEmailAndPassword(emailL, passwordL)

  .then(function(userCredential) {
    // User is signed in
    var user = userCredential.user;
    console.log("User is signed in");
    alert("signed in sucessfully!")

    // Redirect the user to the homepage
    window.location.href = "index.html";
  })
  .catch(function(error) {
    // Handle errors
    console.error(error);
    alert(error)
});
  })
}})

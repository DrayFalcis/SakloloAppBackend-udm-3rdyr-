src="https://www.gstatic.com/firebasejs/5.5.2/firebase.js"

  // Initialize Firebase
    var config = {
    apiKey: "AIzaSyDGWwccADmku_Sy5HM1_B9TMAOPbSFpJSw",
    authDomain: "testing-c70a4.firebaseapp.com",
    databaseURL: "https://testing-c70a4.firebaseio.com",
    projectId: "testing-c70a4",
    storageBucket: "testing-c70a4.appspot.com",
    messagingSenderId: "179573839398"
  };

  firebase.initializeApp(config);

    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
            firestore.settings(settings);
    const docRef = firestore.doc("samples/quote");

   const outputHeader=document.querySelector("#lblQuote");
   const inputTextField=document.querySelector("#txtQuote");
   const saveButton=document.querySelector("#saveButton");
   const loadButton=document.querySelector("#loadButton");


      saveButton.addEventListener("click",function(){
          const textToSave=inputTextField.value;
          console.log("Quotes "+textToSave);

          docRef.set({
              inspirationalQuote111:textToSave
          }).then(function(){
              console.log("Quote Save");
          }).catch(function(error){
              console.log("Got an error: ",error);
          });
      });

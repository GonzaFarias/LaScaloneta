const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXX",
    authDomain: "lascaloneta-9ea9b.firebaseapp.com",
    databaseURL: "XXXXXXXXXXXXXXX",
    projectId: "lascaloneta-9ea9b",
    storageBucket: "XXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXX",
    appId: "1:XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    measurementId: "G-X"
  };
  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

import firebase from 'firebase/app';
import 'firebase/firestore';

function App() {
  firebase.initializeApp({
    apiKey: "AIzaSyCMudHWoNJ5UhGOquZb14mn52L0z5tF5JE",
    authDomain: "e-man-e399f.firebaseapp.com",
    databaseURL: "https://e-man-e399f-default-rtdb.firebaseio.com",
    projectId: "e-man-e399f",
    storageBucket: "e-man-e399f.appspot.com",
    messagingSenderId: "861890681843",
    appId: "1:861890681843:web:89c09a19183f38bd45d086",
    measurementId: "G-600BCZW2FG"
  })
  const firestore = firebase.firestore();
  return (
    <div className="App">
      <h1>E-Man</h1>
    </div>
  );
}

export default App;

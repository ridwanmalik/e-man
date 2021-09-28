import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const firebase = initializeApp({
    apiKey: "AIzaSyCMudHWoNJ5UhGOquZb14mn52L0z5tF5JE",
    authDomain: "e-man-e399f.firebaseapp.com",
    databaseURL: "https://e-man-e399f-default-rtdb.firebaseio.com",
    projectId: "e-man-e399f",
    storageBucket: "e-man-e399f.appspot.com",
    messagingSenderId: "861890681843",
    appId: "1:861890681843:web:89c09a19183f38bd45d086",
    measurementId: "G-600BCZW2FG"
  });

  const db = getFirestore(firebase);
  const getUsers = async (db) => {
    const userCol = collection(db, 'user');
    const userSnapshot = await getDocs(userCol);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
  }

  useEffect(() => {
    const getData = async () => {
      const userFromServer = await getUsers(db)
      setUsers(userFromServer);
    }
    getData()
  }, [])

  return (
    <div className="App">
      <h1>E-Man</h1>
      <ul>
        { users && users.map((user, index) => (
          <li key={ index }>{ user.user_name }</li>
        )) }
      </ul>
    </div>
  );
}

export default App;

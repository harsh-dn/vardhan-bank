import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCk7ocA2nQ20z-Oc6Xta5N971LL2PCCQ_U",
  authDomain: "vardhan-bank.firebaseapp.com",
  projectId: "vardhan-bank",
  storageBucket: "vardhan-bank.appspot.com",
  messagingSenderId: "701897265550",
  appId: "1:701897265550:web:1829fcfee374a3c3f994df",
  measurementId: "G-H1G3VZZP06"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const addUser = ([Name, Aadhar, Account, Balance]) => {
  return db
    .collection("usersDB")
    .add({ Name: Name,Aadhar:Aadhar, Account: Account, Balance: Balance });
};

export const addTransaction = (amount, to, from) => {
  return db
    .collection("transactions")
    .add({ amount: amount, to: to, from: from, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
};

export const transact = (id1, Balance1, id2, Balance2, amount) => {
  console.log(Balance1);
  console.log(Balance2);
  console.log(amount);
  return [db.collection("usersDB").doc(id1).update({
    Balance: Number(Balance1) + Number(amount)
  }),
  db.collection("usersDB").doc(id2).update({
    Balance: Number(Balance2) - Number(amount)
  })]
}

export { db };

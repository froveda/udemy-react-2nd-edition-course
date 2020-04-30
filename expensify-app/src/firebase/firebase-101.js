import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDoYHgna1IVHqexrujelyRWzlPpUwUispM",
  authDomain: "react2courseexpensify.firebaseapp.com",
  databaseURL: "https://react2courseexpensify.firebaseio.com",
  projectId: "react2courseexpensify",
  storageBucket: "react2courseexpensify.appspot.com",
  messagingSenderId: "401267790335",
  appId: "1:401267790335:web:9fd46485efcb5cacf817ca",
  measurementId: "G-ESDLLC7ZD4"
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach(function (childSnapshot) {
//     expenses.push({
//       key: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log('Child changed', snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log('Child added', snapshot.key, snapshot.val());
});

// database.ref('expenses').push({
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: 0
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 4000
// });

// database.ref('expenses').push({
//   id: '3',
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createdAt: -4000
// });

// database.ref().set({
//   name: 'Fabricio Roveda',
//   age: 39,
//   isSingle: false,
//   location: {
//     city: 'CABA',
//     country: 'Argentina'
//   },
//   job: {
//     title: 'Sofware Developer',
//     company: 'Ipsy'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   const name = val.name;
//   const jobTitle = val.job.title;
//   const jobCompany = val.job.company;
//   console.log(`${name} is a ${jobTitle} at ${jobCompany}`);
// });

// database.ref().update({
//   'job/title': 'Software Engineer'
// });

// database.ref('isSingle').remove()
//   .then(function () {
//     console.log("Remove succeeded.")
//   })
//   .catch(function (error) {
//     console.log("Remove failed: " + error.message)
//   });

// console.log('I made a request to change the data');

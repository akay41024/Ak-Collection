import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import "firebase/auth";
import "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import * as serviceWorker from "./serviceWorker";

// const firebaseConfig = {
//   apiKey: "AIzaSyCdJrW0kIkqqITs9CCAh_rDPdIa-en46wc",
//   authDomain: "emart-7e3df.firebaseapp.com",
//   databaseURL: "https://emart-7e3df-default-rtdb.firebaseio.com",
//   projectId: "emart-7e3df",
//   storageBucket: "emart-7e3df.appspot.com",
//   messagingSenderId: "847099330866",
//   appId: "1:847099330866:web:fc856f9190dbe920dd172b",
//   measurementId: "G-H4V7H3Z60P"
// }


// const app = initializeApp(firebaseConfig);
// const fireDB = getFirestore(app);


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyAQeHjtwzq7bS6GIl2fSJ4cl_WDnTZKcQ0',
    authDomain: 'clothing-app-db-57836.firebaseapp.com',
    databaseURL: 'https://clothing-app-db-57836.firebaseio.com',
    projectId: 'clothing-app-db-57836',
    storageBucket: '',
    messagingSenderId: '597917009939',
    appId: '1:597917009939:web:e2b94017e9fa1ec1'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

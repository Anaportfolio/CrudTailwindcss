import firebase from "firebase/compat/app";
import 'firebase/firestore'

if(!firebase.app.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
        projecId: process.env.NEXT_PUBLIC_FIREBASE_PROJEC_ID
    })
}

export default firebase
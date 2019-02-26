import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
firestore.settings({timestampsInSnapshots: true})
export default firebaseApp.firestore()

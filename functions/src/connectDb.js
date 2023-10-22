
//  importing libraries from node modules (other peoples code)  to work with firebase
//  libraries i node modules tan import edihyoruz. hazir kodlar.
import { initializeApp, cert } from "firebase-admin/app";

// importing another library from node modules.
import { getFirestore } from "firebase-admin/firestore";

//importing and connection keys to the code.
import { creds } from '../creds.js'

// initializing the app with crediantials.
initializeApp({
    credential: cert(creds),
})

//lets you connect to the database.
const db = getFirestore()

//export default can only be used once inside the file
//you are working with. you dont use curly braces.
export default db
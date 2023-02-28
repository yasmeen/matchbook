// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCYcmw_HCQB4nJBTkXSrgfti3yBz5YRxrk",
	authDomain: "matchbook-c9ae3.firebaseapp.com",
	databaseURL: "https://matchbook-c9ae3-default-rtdb.firebaseio.com",
	projectId: "matchbook-c9ae3",
	storageBucket: "matchbook-c9ae3.appspot.com",
	messagingSenderId: "961857494061",
	appId: "1:961857494061:web:365223ad459087f7652ca4",
	measurementId: "G-6DYH1N2RCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(collection(db, "users"), where("uid", "==", user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, "users"), {
				uid: user.uid,
				name: user.displayName,
				authProvider: "google",
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

// const logInWithEmailAndPassword = async (email, password) => {
// 	try {
// 		await signInWithEmailAndPassword(auth, email, password);
// 	} catch (err) {
// 		console.error(err);
// 		alert(err.message);
// 	}
// };

// const registerWithEmailAndPassword = async (name, email, password) => {
// 	try {
// 		const res = await createUserWithEmailAndPassword(auth, email, password);
// 		const user = res.user;
// 		await addDoc(collection(db, "users"), {
// 			uid: user.uid,
// 			name,
// 			authProvider: "local",
// 			email,
// 		});
// 	} catch (err) {
// 		console.error(err);
// 		alert(err.message);
// 	}
// };

// const sendPasswordReset = async (email) => {
// 	try {
// 		await sendPasswordResetEmail(auth, email);
// 		alert("Password reset link sent!");
// 	} catch (err) {
// 		console.error(err);
// 		alert(err.message);
// 	}
// };

const logout = () => {
	signOut(auth);
};

export { auth, db, signInWithGoogle, logout };

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    updateDoc,
    where,
} from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import swal from 'sweetalert';
import { toastFailNotify, toastSuccessNotify } from './toastNotify';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//AUTHENTICATION START
export const register = async (email, password, name, lastName, navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await updateProfile(auth.currentUser, {
            displayName: name + ' ' + lastName,
        });
        console.log(userCredential);
        addUser(name, lastName, email);
        toastSuccessNotify('Welcome To Family 😎');
        navigate('/');
    } catch (error) {
        console.log(error);
        toastFailNotify(`Something Went Wrong !!!`);
        toastFailNotify(error.message);
    }
};

export const login = async (email, password, navigate, setUser) => {
    console.log('logged in');
    try {
        await signInWithEmailAndPassword(auth, email, password);
        getUser(email, setUser);
        toastSuccessNotify('Welcome Back');
        navigate('/');
    } catch (error) {
        console.log(error);
        toastFailNotify(`Something Went Wrong !!!`);
        toastFailNotify(error.message);
    }
};
export const logout = async () => {
    try {
        await signOut(auth);
        toastSuccessNotify("We'll miss you..");
    } catch (error) {
        toastFailNotify(`Something Went Wrong !!!`);
    }
};
export const userObserver = (setCurrentUser, setUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { email, displayName, photoURL } = user;
            setCurrentUser({ email, displayName, photoURL });
            getUser(email, setUser);
        } else {
            setCurrentUser(false);
            console.log('user signed out');
        }
    });
};

export const signUpWithGoogle = (navigate) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            addUser(auth.currentUser.name, null, auth.currentUser.email);
            toastSuccessNotify('Welcome...');
            navigate('/');
        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error);
            toastFailNotify(`Something Went Wrong !!!`);
            toastFailNotify(error.message);
        });
};

//AUTHENTICATION END

//FIRESTORE START
const db = getFirestore();

const colRef = collection(db, 'Articles');

//get collection from firestore
export const getAllArticles = async (setArticles) => {
    try {
        const snapshot = await getDocs(colRef);
        const articles = [];
        snapshot?.docs.forEach((doc) => {
            articles.push({ ...doc.data(), id: doc.id });
        });
        setArticles(articles);
    } catch (error) {
        toastFailNotify(`Something Went Wrong !!!`);
        toastFailNotify(error.message);
    }
};

// Add doc into collection
export const addArticle = async (e, values, navigate, authorPP) => {
    e.preventDefault();

    try {
        addDoc(colRef, {
            title: values.title,
            author: auth.currentUser.email,
            authorPP,
            imgURL: values.url,
            text: values.text,
            tag1: values.tag1,
            tag2: values.tag2,
            tag3: values.tag3,
            date: new Date().toLocaleDateString('tr'),
        });
        toastSuccessNotify('Article Posted Successfully');
        console.log('posted');
        navigate('/');
    } catch (error) {
        toastFailNotify(`Something Went Wrong !!!`);
        toastFailNotify(error.message);
    }
};

//delete doc from collection

export const deleteArticle = async (id, navigate) => {
    const docRef = doc(db, 'Articles', id);
    const confirm = await swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this article!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    });

    if (confirm) {
        try {
            deleteDoc(docRef);
            toastSuccessNotify('Artical Deleted Successfully');
            navigate('/');
        } catch (error) {
            toastFailNotify(`Something Went Wrong !!!`);
            toastFailNotify(error.message);
        }
    }
};

export const getArticle = async (id, setArticle) => {
    const docRef = doc(db, 'Articles', id);

    try {
        const docSnap = await getDoc(docRef);

        setArticle(docSnap.data());
    } catch (error) {
        console.log(error.message);
    }
};

export const updateArticle = async (e, id, values, navigate) => {
    e.preventDefault();
    const docRef = doc(db, 'Articles', id);
    const data = {
        title: values.title,
        imgURL: values.imgURL,
        text: values.text,
        tag1: values.tag1,
        tag2: values.tag2,
        tag3: values.tag3,
    };

    try {
        await updateDoc(docRef, data);
        toastSuccessNotify('Artical Updated Successfully');
        navigate('/');
    } catch (error) {
        toastFailNotify(`Something Went Wrong !!!`);
        toastFailNotify(error.message);
    }
};

export const userArticles = async (email, setArticles) => {
    const articleArray = [];
    const q = query(
        collection(db, 'Articles'),
        where('author', '==', `${email}`)
    );
    try {
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            articleArray.push({ ...doc.data(), id: doc.id });
        });
        setArticles(articleArray);
    } catch (error) {
        console.log(error.message);
    }
};

//FIRESTORE END

//fireStore Users

const colRefUsers = collection(db, 'users');

export const addUser = async (name, lastName, email) => {
    try {
        addDoc(colRefUsers, {
            userName: `${name} ${lastName}`,
            email: email,
            authorPP: `https://github.com/HaciGustav/Fire-Blog/blob/main/public/avatars/avt_gorilla.jpg?raw=true`,
        });
        console.log('user added');
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (email, setUser) => {
    try {
        const snapshot = await getDocs(colRefUsers);
        const users = [];
        snapshot?.docs.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });
        });
        const user = users.filter((item) => item.email === email);
        setUser(user);
    } catch (error) {
        console.log(error.message);
    }
};

export const setAvatar = async (userDetails, e) => {
    const { id, email, userName } = userDetails;
    const docRef = doc(db, 'users', id);
    const data = {
        authorPP: e.target.name,
        email,
        userName,
    };
    console.log(e.target.name);
    try {
        await updateDoc(docRef, data);
        console.log('avatar Updated', data);
        toastSuccessNotify('Avatar Updated');
    } catch (error) {
        console.log(error.message);
    }
};

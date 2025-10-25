import { createContext, useEffect, useState } from "react";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  // Register function
  const register = async (email, password, name, photoURL) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, { displayName: name, photoURL });
    setUser(res.user);
    return res.user;
  };

  // Login function
  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    setUser(res.user);
    return res.user;
  };

  // Google login
  const loginWithGoogle = async () => {
    const res = await signInWithPopup(auth, provider);
    setUser(res.user);
    return res.user;
  };

  // Logout
  const logout = async () => {
    await auth.signOut();
    setUser(null);
  };

// resetpassword
const resetPassword = async (email) => {
  setLoading(true);
  try {
    await sendPasswordResetEmail(auth, email);
  } finally {
    setLoading(false);
  }
};

// Update function
const updateUserProfile = async ({ displayName, photoURL }) => {
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, { displayName, photoURL });
    setUser({ ...auth.currentUser });
  } else {
    throw new Error("No user logged in");
  }
};


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    register,
    login,
    loginWithGoogle,
     resetPassword,
    logout,
    updateUserProfile,
    auth
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

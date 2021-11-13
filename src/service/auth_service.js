import firebaseApp from './firebase';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';

class AuthService {
  login(providerName) {
    let provider;
    if (providerName === 'Google') provider = new GoogleAuthProvider();
    if (providerName === 'Github') provider = new GithubAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider);
  }

  onAuthStateChange(onUserChanged) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      onUserChanged(user);
    });
  }

  logout() {
    const auth = getAuth();
    auth.signOut();
  }
}

export default AuthService;

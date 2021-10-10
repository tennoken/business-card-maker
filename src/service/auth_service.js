import firebaseApp from './firebase';

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';

class AuthService {
  login(providerName) {
    let provider;
    if (providerName === 'Google') provider = new GoogleAuthProvider();
    if (providerName === 'Github') provider = new GithubAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider);
  }
}

export default AuthService;

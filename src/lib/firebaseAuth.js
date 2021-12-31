import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

async function login(name) {
  if (name === 'google') {
    const result = await signInWithPopup(getAuth(), new GoogleAuthProvider());
    const credential = GoogleAuthProvider.credentialFromResult(result);
    return credential.accessToken;
  } else if (name === 'github') {
    const result = await signInWithPopup(getAuth(), new GithubAuthProvider());
    const credential = GithubAuthProvider.credentialFromResult(result);
    return credential.accessToken;
  }
  return null;
}

export default login;

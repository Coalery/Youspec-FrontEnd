import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from 'firebase/auth';

async function login(name) {
  if (name === 'google') {
    const result = await signInWithPopup(getAuth(), new GoogleAuthProvider());
    return await result.user.getIdToken();
  } else if (name === 'github') {
    const result = await signInWithPopup(getAuth(), new GithubAuthProvider());
    return await result.user.getIdToken();
  }
  return null;
}

async function logout() {
  await signOut(getAuth());
}

export { login, logout };

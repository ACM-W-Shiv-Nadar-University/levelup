import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider,
  signOut 
} from 'firebase/auth';
import { auth } from './firebase';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Configure GitHub provider  
githubProvider.setCustomParameters({
  prompt: 'consent'
});

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log('Google sign in successful:', result.user);
    return result.user;
  } catch (error) {
    console.error('Google sign in error:', error);
    throw error;
  }
};

export const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    console.log('GitHub sign in successful:', result.user);
    return result.user;
  } catch (error) {
    console.error('GitHub sign in error:', error);
    throw error;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log('Sign out successful');
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};
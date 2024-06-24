import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import firebaseApp from '../config';

const auth = getAuth(firebaseApp);

const signIn = async values => {
  const { email, password } = values;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return { status: 200, data: response };
  } catch (error) {
    return { status: 404, message: error };
  }
};

export default signIn;

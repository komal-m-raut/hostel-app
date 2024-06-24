import { getFirestore, addDoc, collection } from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);

const addAllotment = async values => {
  try {
    const response = await addDoc(collection(firestore, 'allotment'), values);
    return { status: 200, data: response };
  } catch (error) {
    return { status: 404, message: error };
  }
};

export default addAllotment;

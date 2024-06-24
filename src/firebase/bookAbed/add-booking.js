import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);

export const bookBed = async values => {
  try {
    const response = await addDoc(collection(firestore, 'booking'), values);
    return { status: 200, data: response };
  } catch (e) {
    return { status: 404, message: e };
  }
};

import {
  getFirestore,
  getDocs,
  query,
  where,
  collection,
} from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);

export const getRentDetailsById = async id => {
  try {
    const q = query(
      collection(firestore, 'rentDetails'),
      where('idNo', '==', id),
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const documentData = querySnapshot.docs[0].data();
      return { status: 200, data: documentData };
    }
    return { status: 404, message: 'Document not found' };
  } catch (error) {
    return { status: 404, message: error };
  }
};

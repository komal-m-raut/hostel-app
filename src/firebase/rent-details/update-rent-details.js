import {
  getFirestore,
  getDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);

const getRentDetailsByIdAndUpdate = async (id, updateData) => {
  try {
    const q = query(
      collection(firestore, 'rentDetails'),
      where('idNo', '==', id),
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docToBeUpdate = querySnapshot.docs[0].ref;
      await updateDoc(docToBeUpdate, updateData);

      const updatedData = await getDoc(docToBeUpdate);

      if (updatedData.exists()) {
        return { status: 200, data: updatedData.data() };
      }
    }

    return { status: 404, message: 'Document not found or not updated' };
  } catch (error) {
    return { status: 500, message: error };
  }
};

export default getRentDetailsByIdAndUpdate;

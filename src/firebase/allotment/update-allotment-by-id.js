import {
  getFirestore,
  updateDoc,
  collection,
  doc,
  query,
  where,
  getDocs,
  getDoc,
} from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);

export default async function updateAllotmentById(id) {
  try {
    const q = query(
      collection(firestore, 'allotment'),
      where('name', '==', id),
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const allotmentDoc = querySnapshot.docs[0];
      const allotmentRef = doc(firestore, 'allotment', allotmentDoc.id);

      const currentDate = new Date().toLocaleDateString('en-CA');
      const updatedDocData = { status: 'left', endDate: currentDate };

      await updateDoc(allotmentRef, updatedDocData);

      const updatedDocSnapshot = await getDoc(allotmentRef);
      return { status: 200, data: updatedDocSnapshot.data() };
    }
    return { status: 404, message: 'Document not found' };
  } catch (error) {
    return { status: 500, message: error };
  }
}

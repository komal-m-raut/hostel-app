import { getFirestore, getDocs, collection } from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);

const getAllotment = async () => {
  const collectionRef = collection(firestore, 'allotment');
  try {
    const documents = [];

    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach(doc => {
      documents.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    return { status: 200, data: documents };
  } catch (error) {
    return { status: 404, message: error };
  }
};

export default getAllotment;

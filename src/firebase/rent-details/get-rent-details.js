import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);

const getRentDetails = async () => {
  try {
    const documents = [];
    const QueySnapshot = await getDocs(collection(firestore, 'rentDetails'));
    QueySnapshot.forEach(doc => {
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

export default getRentDetails;

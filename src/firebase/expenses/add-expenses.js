import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);
const addExpense = async values => {
  try {
    const currentDate = new Date().toLocaleDateString('en-CA');
    const expenseId = uuidv4();
    const dataWithDate = { ...values, currentDate, expenseId };
    const response = await addDoc(
      collection(firestore, 'expenses'),
      dataWithDate,
    );
    return { status: 200, data: response };
  } catch (error) {
    return { status: 404, message: error };
  }
};

export default addExpense;

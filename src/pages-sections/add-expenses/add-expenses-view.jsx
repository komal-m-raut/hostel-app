import React from 'react';

import { H3 } from 'components/Typography'; // Local CUSTOM COMPONENT
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import ExpensesForm from './add-expenses-form';
import addExpense from '../../firebase/expenses/add-expenses';

const AddExpensesView = () => {
  const router = useRouter();

  const INITIAL_VALUES = {
    eBill: '',
    wBill: '',
    municipalTax: '',
    bankEmi: '',
    salary: '',
    maintenance: '',
    laundry: '',
    miscellaneous: '',
    remark: '',
  };

  const handleFormSubmit = async values => {
    try {
      const response = await addExpense(values);

      if (response.status === 200) {
        console.log('Expense added successfully:', response.data);
        router.push('/');
      } else {
        console.error('Expense addition failed:', response.message);
      }
    } catch (error) {
      console.error('Error during expense addition:', error);
    }
  };

  return (
    <Container sx={{ mt: 12, position: 'relative' }}>
      <H3 align="center" mb={2}>
        Add Expenses
      </H3>
      <ExpensesForm
        initialValues={INITIAL_VALUES}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  );
};

export default AddExpensesView;

import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import { useState } from 'react';

function App() {
  const title = 'Expense Tracker';
  const [modalState, changeModalState] = useState(false);
  
  return (
    <div className="App">
      <div className="app-title">
        <h1>{title}</h1>
      </div>
      <div className="container">
        <button className="create-expense-button" onClick={() => changeModalState(true)}>Create New Expense</button>
      </div>
      {modalState && <ExpenseForm closeModal={modalState} />}
      <ExpenseTable />
    </div>
  );
}

export default App;
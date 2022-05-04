import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';

function App() {
  const title = 'Expense Tracker';
  const handleClick = () => {
    console.log('click works');
  }
  return (
    <div className="App">
      <div className="app-title">
        <h1>{title}</h1>
      </div>
      <div className="container">
        <button className="create-expense-button" onClick={handleClick}>Create New Expense</button>
        <ExpenseForm />
      </div>
      <ExpenseTable />
    </div>
  );
}

export default App;
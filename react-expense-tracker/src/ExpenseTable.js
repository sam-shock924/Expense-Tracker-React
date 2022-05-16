import Table from 'react-bootstrap/Table';

const ExpenseTable = () => {
    return ( 
        <div className="expense-table">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Payment Type</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody className="">
                </tbody>
            </table>
        </div>
     );
}
 
export default ExpenseTable;
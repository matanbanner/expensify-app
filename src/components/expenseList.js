import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './expenseListItem'
import selectedExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        { props.expenses.map(expense => <ExpenseListItem {...expense} key={expense.id} />) }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters),
    }
}


export default connect(mapStateToProps)(ExpenseList)
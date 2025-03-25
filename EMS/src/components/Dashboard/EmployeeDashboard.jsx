import React from 'react'
import Header from '../Header'
import TaskListNumbers from '../TaskListNumbers'
import TaskList from '../TaskList'

const EmployeeDashboard = () => {
    return (
        <>
            <Header />
            <TaskListNumbers/>
            <TaskList/>
        </>
    )
}

export default EmployeeDashboard
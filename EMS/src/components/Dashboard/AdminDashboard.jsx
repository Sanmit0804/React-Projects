import React from 'react'
import Header from '../Header'
import CreateTask from '../CreateTask'
import TaskList from '../TaskList'

const AdminDashboard = () => {
    return (
        <>
            <Header />
            <CreateTask/>
            <TaskList/>
        </>
    )
}

export default AdminDashboard
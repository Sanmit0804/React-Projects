import React from 'react'
import Header from '../Header'
import CreateTask from '../CreateTask'
import TaskList from '../TaskList'
import AllTask from '../AllTask'

const AdminDashboard = () => {
    return (
        <>
            <Header />
            <CreateTask/>
            <AllTask/>
        </>
    )
}

export default AdminDashboard
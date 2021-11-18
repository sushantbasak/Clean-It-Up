import React from 'react';
import './AdminDashboard.css';

import Navbar from '../../components/Navbar/Navbar';
import Navbar from '../../components/JobList/JobList';

const AdminDashboard = () => {
    return (
        <>
        <Navbar />
        <JobList role="1" list={jobs} />
        </>
    )
}

export default AdminDashboard;
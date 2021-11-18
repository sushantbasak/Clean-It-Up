import React from 'react';
import './AdminDashboard.css';

import Navbar from '../../components/Navbar/Navbar';
import JobList from '../../components/Jobs/JobList';

const AdminDashboard = () => {
     const jobs = [
    {
      id: 1,
      title: 'Cleaning Job 1',
      description: 'Please clean the garbage',
      address: 'At Chandani Chowk, Delhi',
      status: 1
    },
    {
      id: 2,
      title: 'Cleaning Job 2',
      description: 'Clean the garbage properly',
      address: 'At Vasant Vihar, Delhi',
      status: 1
    },
    {
      id: 3,
      title: 'Cleaning Job 3',
      description: 'Clear blocked sewere',
      address: 'At Pitampura Delhi',
      status: 0
    },
  ];
    return (
        <>
        <Navbar />
        <JobList role="1" list={jobs} />
        </>
    )
}

export default AdminDashboard;
import React from 'react';
import './WorkerDashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import JobList from '../../components/Jobs/JobList';

const WorkerDashboard = () => {
     const jobs = [
    {
      id: 1,
      title: 'Cleaning Job 1',
      description: 'Please clean the garbage',
      address: 'At Chandani Chowk, Delhi',
      status: 0
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
      status: 1
    },
  ];
    return (
        <>
        <Navbar />
        <JobList role="2" list={jobs} />
        </>
    )
} 

export default WorkerDashboard;
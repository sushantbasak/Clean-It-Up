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
    },
    {
      id: 2,
      title: 'Cleaning Job 2',
      description: 'Clean the garbage properly',
      address: 'At Vasant Vihar, Delhi',
    },
    {
      id: 3,
      title: 'Cleaning Job 3',
      description: 'Clear blocked sewere',
      address: 'At Pitampura Delhi',
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
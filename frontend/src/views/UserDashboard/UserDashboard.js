import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NewJob from '../../components/NewJob/NewJob';
import JobList from '../../components/Jobs/JobList';

const UserDashboard = () => {
  const jobs = [
    {
      title: 'Cleaning Job 1',
      description: 'Please clean the garbage',
      address: 'At Chandani Chowk, Delhi',
    },
    {
      title: 'Cleaning Job 2',
      description: 'Clean the garbage properly',
      address: 'At Vasant Vihar, Delhi',
    },
    {
      title: 'Cleaning Job 3',
      description: 'Clear blocked sewere',
      address: 'At Pitampura Delhi',
    },
  ];
  return (
    <>
      <Navbar />
      <NewJob />
      <JobList role="3" list={jobs} />
    </>
  );
};

export default UserDashboard;

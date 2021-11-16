import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NewJob from '../../components/NewJob/NewJob';
import JobItem from '../../components/Jobs/JobItem';

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <NewJob />
      <JobItem role="3" />
    </>
  );
};

export default UserDashboard;

import React from 'react';
import './JobList.css';
import JobItem from '../../components/Jobs/JobItem';

const JobList = (props) => {
  return (
    <div className="job-list">
      {props.list.map((job) => {
        return <JobItem role={props.role} title={job.title} description={job.description} address={job.address} />;
      })}
    </div>
  );
};

export default JobList;

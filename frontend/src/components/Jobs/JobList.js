import React from 'react';
import './JobList.css';
import JobItem from '../../components/Jobs/JobItem';

const JobList = (props) => {
  return (
    <div className="job-list">
      {props.list.map((job) => {
        return (
          <JobItem
            key={job.id}
            id={job.id}
            role={props.role}
            title={job.title}
            description={job.description}
            address={job.address}
            deleteHandler={(id) => props.deleteJob(id)}
            status={job.status}
          />
        );
      })}
    </div>
  );
};

export default JobList;

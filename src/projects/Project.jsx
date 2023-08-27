import React from 'react';
import './project.css';

const Portfolio = ({ projects }) => {
  return (
    <>
     <div className="proj">
      <h2 className=" port m-5" style={{ color: '#3d3d3d' }}>Portfolio</h2>
      <div className="si">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card" >
              <h5>{project.title}</h5>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      </>
  );
};

export default Portfolio;
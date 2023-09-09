import React from 'react';
import learning from '../../images/learning.svg';
import explor from '../../images/explor.svg';
import './Intro.css';

export default function Intro(prop) {
  const { students, courses, years } = prop;
  return (
    <section className="introduction">
      <div className="intro pb-4">
        <div className="m-4">
          <img className="learning" src={learning} alt="learning banner" />
        </div>
        <div className="m-4">
          <img className="explore" src={explor} alt="explore banner" />
        </div>
        <div>
          <button type="button" className="btn btn-lg m-4" style={{ backgroundColor: '#fde74c', float: 'left' }}>REGISTER NOW</button>
        </div>
        <div
          className="highlight p-4 mb-4"
          style={{
            color: '#fde74c', display: 'flex', width: '100%', justifyContent: 'space-evenly', background: 'hsla(46,69%,94%,.5)',
          }}
        >
          <div>
            <h2 className="m-0">{students}</h2>
            <h3 className="m-0">Students</h3>
          </div>
          <div>
            <h3 className="m-0">{courses}</h3>
            <h3 className="m-0">Courses</h3>
          </div>
          <div>
            <h3 className="m-0">{years}</h3>
            <h3 className="m-0">years</h3>
          </div>
        </div>
      </div>
      <div className="front-image" />
    </section>
  );
}

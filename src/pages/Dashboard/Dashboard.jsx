// User interfaces that users interact with

import React from 'react';
import videoBg from '../../assets/Drone_Boat.mp4';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
  return (
    <div className='container' id='dashboard'>
      <video className={`${styles.bgVideo}`} src={videoBg} autoPlay loop muted />
      <h2 className={`${styles.topic}`}> Pleasure Island</h2>
    </div>
  );
}

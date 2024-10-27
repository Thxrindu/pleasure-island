// User interfaces that users interact with

import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import videoBg from '../../assets/Drone_Boat.mp4';
import styles from './Dashboard.module.scss'

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      {/* <h1>hi</h1> */}
      <video className={`${styles.bgVideo}`}  src={videoBg} autoPlay loop muted/>
      <h2 className={`${styles.topic}`}> Pleasure Island</h2>    
    </div>
  );
}

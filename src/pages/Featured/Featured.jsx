import React from 'react';
import videoFeatured from '../../assets/Featured.mp4';
import styles from './Featured.module.scss';

const Featured = () => {
  return (
    <div className={`${styles.featured} container`}>
      <p className={`${styles.fheading}`}> Featured </p>
      <video
        className={`${styles.videoFeatured}`}
        src={videoFeatured}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Featured;

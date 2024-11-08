import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './HorizontalScrollView.module.scss';

const packages = [
  {
    id: 1,
    name: 'Package 1',
    description: 'This is Package 1',
    price: '$25',
    image:
      'https://images.unsplash.com/photo-1730871082254-65b6e151c82b?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Package 2',
    description: 'This is Package 2',
    price: '$35',
    image:
      'https://images.unsplash.com/photo-1499160024179-7d7286faa41a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Package 3',
    description: 'This is Package 3',
    price: '$45',
    image:
      'https://images.pexels.com/photos/28222368/pexels-photo-28222368/free-photo-of-three-people-sitting-on-a-grassy-hill-with-balloons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    name: 'Package 4',
    description: 'This is Package 4',
    price: '$55',
    image:
      'https://images.pexels.com/photos/28222368/pexels-photo-28222368/free-photo-of-three-people-sitting-on-a-grassy-hill-with-balloons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    name: 'Package 5',
    description: 'This is Package 5',
    price: '$65',
    image:
      'https://images.pexels.com/photos/28222368/pexels-photo-28222368/free-photo-of-three-people-sitting-on-a-grassy-hill-with-balloons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    name: 'Package 6',
    description: 'This is Package 6',
    price: '$75',
    image:
      'https://images.pexels.com/photos/28222368/pexels-photo-28222368/free-photo-of-three-people-sitting-on-a-grassy-hill-with-balloons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default function Packages() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const maxScrollLeft = current.scrollWidth - current.clientWidth;
    const tolerance = 5; // A small tolerance to handle rounding issues

    if (direction === 'left') {
      if (current.scrollLeft <= 0 + tolerance) {
        // If at or near the start, jump to the end
        current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: -current.offsetWidth, behavior: 'smooth' });
      }
    } else {
      if (current.scrollLeft >= maxScrollLeft - tolerance) {
        // If at or near the end, jump to the start
        current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: current.offsetWidth, behavior: 'smooth' });
      }
    }
  };
  return (
    <div className={styles.container} id='packages'>
      <button className={styles.arrow} onClick={() => scroll('left')}>
        <FaChevronLeft />
      </button>

      <div className={styles.scrollContainer} ref={scrollRef}>
        {packages.map((pkg) => (
          <div key={pkg.id} className={styles.card}>
            <img src={pkg.image} alt={pkg.name} className={styles.cardImage} />
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <span>{pkg.price}</span>
          </div>
        ))}
      </div>

      <button className={styles.arrow} onClick={() => scroll('right')}>
        <FaChevronRight />
      </button>
    </div>
  );
}

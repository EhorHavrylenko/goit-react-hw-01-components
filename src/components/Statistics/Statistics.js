import React from 'react';
import StaticItem from './StaticItem';
import styles from './staticStyles.module.css';
import PropTypes from 'prop-types';

const Statistics = ({stats}) => {
   return (
    <section className={styles.container}>
        <h2 className={styles.title}>UPLOAD STATS</h2>
        <ul className={styles.list}>
        {stats.map(({id, label, percentage}) => (
                   <li key={id} className={styles.list_item}>

                       <StaticItem 
                       label={label}
                       percentage={percentage}
                       />
                       
                   </li>
               ))}
        </ul>
  </section>
   )
}

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number, 
    currency: PropTypes.string,
    id: PropTypes.string
  }



export default Statistics;


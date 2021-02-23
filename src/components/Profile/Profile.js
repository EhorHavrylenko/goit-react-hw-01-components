import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from './empty-avatar.png';
import styles from './profileStyles.module.css'


const Profile = ({name, tag, location, avatar, stats} ) => {
     return (
        <div className={styles.profile}>
        <div className={styles.description}>
          <img
            className={styles.avatar}
            src={avatar}
            alt="Аватар пользователя"
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.tag}>{location}</p>
        </div>
      
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <span className={styles.list}>Followers</span>
            <span className={styles.list}>{stats.followers}</span>
          </li>
          <li className={styles.list_item}>
            <span className={styles.list}>Views</span>
            <span className={styles.list}>{stats.views}</span>
          </li>
          <li className={styles.list_item}>
            <span className={styles.list}>Likes</span>
            <span className={styles.list}>{stats.likes}</span>
          </li>
        </ul>
      </div>
     )
}

Profile.defaultProps = {
  avatar: defaultAvatar
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string, 
  location: PropTypes.string, 
  avatar: PropTypes.string,
}

export default Profile; 
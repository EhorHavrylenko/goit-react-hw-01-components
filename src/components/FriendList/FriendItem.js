import React from 'react';
import styles from './stylesFrList.module.css';
import PropTypes from 'prop-types';


const FriendItem = ({avatar, name, isOnline, id}) => {
    return (
        <div className={styles.li_container }> 
           <span className={isOnline ? styles.online : styles.offline}></span>
           <img className="avatar" src={avatar} alt="" width="48" />
           <p className="name">{name}</p>
        </div>
    )
}

FriendItem.defaultProps = {
    isOnline: 'offline'
}

FriendItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string, 
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}

export default FriendItem;
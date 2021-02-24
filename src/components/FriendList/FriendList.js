import React from 'react';
import FriendItem from './FriendItem';
import styles from './stylesFrList.module.css';



const FriendList = ({friends}) => {
    return (
      <div className={styles.container}>
        <ul className={styles.list}>   
            {friends.map(({avatar, name, isOnline, id}) => (
                <li key={id}>
                  <FriendItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                  />
                </li>
            ))}       
        </ul>
      </div>
    )
}

export default FriendList;
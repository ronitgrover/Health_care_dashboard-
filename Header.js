import React from 'react';
import styles from './Header.module.css';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>
      <div className={styles.searchBar}>
        <FiSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search..." className={styles.searchInput} />
      </div>
      <div className={styles.userActions}>
        <FiBell className={styles.notificationIcon} />
        <div className={styles.userProfile}>
          <img src="/assets/images/user-avatar.jpg" alt="User" className={styles.avatar} />
          <span className={styles.userName}>Dr. Sarah Johnson</span>
        </div>
        <button className={styles.addButton}>
          <FiPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;